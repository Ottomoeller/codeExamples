/**
 * Created by Cottomoeller on 9/23/2016.
 */
let HTTP = require('q-io/http')

//let userId = HTTP.GET('http://localhost:7000')

HTTP.read('http://localhost:7000')
    .then(userId => HTTP.read(`http://localhost:7001/${userId}`))
    //.then(response => console.log(response))
    .then(response => console.log(JSON.parse(response)))
    .catch(error => console.log(error))
    .done()

