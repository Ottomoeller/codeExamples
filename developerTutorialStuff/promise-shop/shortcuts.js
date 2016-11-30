/**
 * Created by Cottomoeller on 9/20/2016.
 */
let promise1 = Promise.resolve('This Worked')
let promise2 = Promise.reject(new Error('This didnt WORK!!!'))


promise1.catch(console.log)
promise2.catch(console.log)