/**
 * Created by Cottomoeller on 9/22/2016.
 */
//    const Q = require('q')
//let alwaysThrows = () => {throw new Error('OH NOES')}
//let iterate = (num = 1) => {
//    console.log(num)
//    return num + 1
//}
//
//Promise.resolve(iterate(1))
//    .then(iterate)
//    .then(iterate)
//    .then(iterate)
//    .then(iterate)
//    .then(alwaysThrows)
//    .then(iterate)
//    .then(iterate)
//    .then(iterate)
//    .then(iterate)
//    .then(iterate)
//    .catch(console.log)

function iterate (num) {
    console.log(num);
    return ++num;
};

function alwaysThrows () {
    throw new Error("OH NOES");
};

Promise.resolve(iterate(1))
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(alwaysThrows)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(null, console.log);
//Contact GitHub API Training Shop Blog About
//© 2016 GitHub, Inc. Terms Privacy Security Status
