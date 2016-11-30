/**
 * Created by Cottomoeller on 9/7/2016.
 */
module.exports = function arrayMap(arr, fn) {

   return arr.reduce(function(prev, curr){
       prev.push(fn(curr))
        return prev
    }, [])
}
