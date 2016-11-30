/**
 * Created by Cottomoeller on 9/2/2016.
 */
var slice = Array.prototype.slice

function logger(namespace) {
    return function(){
        var arr = slice.apply(arguments)
        arr.unshift(namespace)
        var str = arr.reduce(function(prevVal, currVal){
            return prevVal.concat(" ", currVal)
        })
        //console.log(arguments)

        console.log(str)
    }
}

module.exports = logger

//let logger = namespace => {
//    return () => {
//        console.log(...([namespace].concat(arguments)))
//    }
//}