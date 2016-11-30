/**
 * Created by Cottomoeller on 9/23/2016.
 */
let HTTP = require("q-io/http")
HTTP.read('http://localhost:1337')
    .then(json => console.log(JSON.parse(json)))
    .catch(console.log)
    .done()

//var qhttp = require('q-io/http');
//
//qhttp.read("http://localhost:1337")
//    .then(function (json) {
//        console.log(JSON.parse(json));
//    })
//    .then(null, console.error)
//    .done()


