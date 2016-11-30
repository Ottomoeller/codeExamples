/**
 * Created by Cottomoeller on 9/22/2016.
 */

let all = (promise1, promise2) => {
    let result1
    return promise1
        .then(value1 => {result1=value1})
        .then(() => {return promise2})
        .then(value2 => ([result1, value2]))
}

all(getPromise1(), getPromise2())
.then(console.log)