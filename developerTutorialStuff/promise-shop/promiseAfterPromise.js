/**
 * Created by Cottomoeller on 9/21/2016.
 */

let onFulfilled = (promise) => {return console.log(promise)};

first()
    .then(resultFromFirst => second(resultFromFirst))
    .then(result => console.log(result));

