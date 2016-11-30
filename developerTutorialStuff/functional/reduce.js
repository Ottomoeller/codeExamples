/**
 * Created by Cottomoeller on 8/26/2016.
 */
function countWords(inputWords){
    return inputWords.reduce(function (prevVal, currVal) {
        prevVal[currVal] ? prevVal[currVal] += 1 : prevVal[currVal] = 1
        return prevVal
    }, {})
}

module.exports = countWords