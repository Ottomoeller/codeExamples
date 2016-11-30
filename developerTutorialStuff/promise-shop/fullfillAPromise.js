/**
 * Created by Cottomoeller on 9/15/2016.
 */

'use strict';

var promise = new Promise(function(fulfill, reject){
    setTimeout(function(){
        fulfill("FULFILLED!")
    }, 300)
});

promise.then(console.log);


