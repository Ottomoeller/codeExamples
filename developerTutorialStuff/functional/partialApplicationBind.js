/**
 * Created by Cottomoeller on 9/2/2016.
 */

module.exports = function(namespace) {
        function argumentArr() {
            return arguments
        }

        var prepend = argumentArr.bind(undefined, namespace)
        return console.log(prepend)
}

//module.exports = function(namespace) {
//    return console.log.bind(console, namespace)
//}
