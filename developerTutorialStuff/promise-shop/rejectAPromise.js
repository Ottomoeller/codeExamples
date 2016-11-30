/**
 * Created by Cottomoeller on 9/19/2016.
 */

var promise = new Promise(function(fulfill, reject){
    var error = {};
   setTimeout(function(){
       //error["message"] = 'REJECTED!';
       reject(new Error('REJECTED!'));
   }, 300);
});

function onReject(error){
    return console.log(error.message);
}

promise.then(null , onReject);