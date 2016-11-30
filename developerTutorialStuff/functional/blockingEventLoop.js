/**
 * Created by Cottomoeller on 9/8/2016.
 */
function repeat(operation, num) {
     //modify this so it can be interrupted

            if (num <= 0) return
            operation()
    setTimeout(function() {
            return repeat(operation, --num)
        },0)
}

module.exports = repeat
