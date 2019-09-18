const mysql = require('mysql');
const cache = require('memory-cache');



// NOTE State mysql at the start 
/**
 * This use memory for remember the connection string just define at the server config.
 * @param {Object} connString this will receive the mysql connection string config.
 * @param {*} log Just show the log of the connetion result.
 */
const init = (connString, log = false) => {

    // NOTE Check dublicate
    if(cache.get('connString')){
        log && console.log("mysqlr log: new connection string", cache.get('connString'))
        cache.del('connString')
    }  

    cache.put('connString', connString)
    return mysql.createConnection(connString);
}



// NOTE Query of the mysql. Simple Query For fast Work
/**
 * This return only promise. Just give the query and get return the result.
 * @param {*} qry Query String
 */
const query = (qry) => {
    return new Promise((resolve, reject) => {
        
        if(cache.get('connString') === null){
            resolve({error: 'No String Found', results: null})
        } else {
            
            const connection = init(cache.get('connString'));
            connection.query(qry, function (error, results, fields) {
                if (error) {
                    resolve({error, results})
                } else {
                    resolve({error, results})
                } 
            });
        }
    })
}


// NOTE Query of the mysql. Simple Query For fast Work
/**
 * This return only promise. It will entry bulk. Based on the key of array field and json data
 * @param {Array} field_name_array  Contain the field name array. 
 * @param {Array} data_json         Query String
 */
const bulkEntry = (field_name_array, data_json) => {
    return new Promise((resolve, reject) => {

    })
}


module.exports = {
    init: init,
    query: query
}