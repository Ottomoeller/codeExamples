/**
 * Created by Cottomoeller on 9/7/2016.
 */
function Spy(target, method) {
    var result = {
        count: 0
    }
    result.count = 0
    var originalFunction = target[method];
    target[method] = function(){
        result.count++
        originalFunction.apply(this, arguments)
    }
    return result
}

module.exports = Spy
