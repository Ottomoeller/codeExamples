/**
 * Created by Cottomoeller on 8/29/2016.
 */
var count = 0
function reduce(arr, fn, initial) {
    var value
    if(counter < arr.length){
        initial = fn(initial, arr[counter], counter, arr)
        count++
        value = reduce(arr, fn(initial, arr[counter], counter, arr), initial)
    } else {
        value = initial
    }
    return value
    //return counter < arr.length ? reduce(arr, fn, initial) : initial
}

module.exports = reduce


//paavos solution
//let reduce = (arr, fn, initial) => {
//    let reduceOne = (index, value) => {
//        if (index < arr.length) {
//            return reduceOne(index + 1, fn(value, arr[index], index, arr))
//        } else {
//            return value
//        }
//    }
//
//    return reduceOne(0, initial)
//}
//
//console.log(reduce([1,2,3], (prev, curr, index, arr) => {
//        return prev + curr
//    }, 0))
