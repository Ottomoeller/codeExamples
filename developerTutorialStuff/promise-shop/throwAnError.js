/**
 * Created by Cottomoeller on 9/22/2016.
 */

    'use strict'

let parsePromised = (json) => {
    return new Promise((fulfill, reject) => {
        try{
            fulfill(JSON.parse(json))
        } catch (e){
            reject(e)
        }
        //fulfill(json)
    })
}

parsePromised(process.argv[2])
    .then(null, console.log)