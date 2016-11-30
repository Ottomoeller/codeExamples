/**
 * Created by Cottomoeller on 8/31/2016.
 */
function duckCount() {
    var argArr = Array.prototype.slice.call(arguments);
    var emptyArr = []
    var allDucks = function getAllDucks(arr, duckArr) {
        if (arr.length > 0) {
            console.log(arr[0])
            if(Object.prototype.hasOwnProperty.call(arr[0], "quack")){
                duckArr.push(arr.shift())
            } else {
                arr.shift()
            }
            return getAllDucks(arr, duckArr)
        } else {
            console.log(duckArr)
            return duckArr.length
        }
    }

    return allDucks(argArr, emptyArr)

}

module.exports = duckCount

//function duckCount() {
//    return Array.prototype.slice.call(arguments).filter(function(obj) {
//        return Object.prototype.hasOwnProperty.call(obj, 'quack')
//    }).length
//}
//
//module.exports = duckCount


