/**
 * Created by Cottomoeller on 9/21/2016.
 */
let attachTitle = (arg1) => {return 'DR. ' + arg1}
let promise = Promise.resolve('MANHATTAN')

promise
    .then(promiseResult => attachTitle(promiseResult))
    .then(console.log)

//promise
//    .then(attachTitle)
//    .then(console.log)