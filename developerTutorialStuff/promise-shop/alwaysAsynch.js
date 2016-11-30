/**
 * Created by Cottomoeller on 9/20/2016.
 */

let promise = new Promise((resolve, reject) => {
        resolve('PROMISE VALUE')
});

promise.then(console.log)

console.log('MAIN PROGRAM')