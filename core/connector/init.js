const mysql = require('mysql');
const cache = require('memory-cache');


// ANCHOR init
// NOTE State mysql at the start 
/**
 * This use memory for remember the connection string just define at the server config.
 * @param {Object} connString this will receive the mysql connection string config.
 * @param {*} log Just show the log of the connetion result.
 */
exports.connect = (connString, log = false) => {

    // NOTE Check dublicate
    if(cache.get('connString')){
        log && console.log("mysqlr log: new connection string", cache.get('connString'))
        cache.del('connString')
    }  

    cache.put('connString', connString)
    return mysql.createConnection(connString);
}


exports.disconnect = (cb, log = false) => {
    let connString = cache.get('connString')
    cache.del('connString')
    return  this.connect(connString).end(cb);
}
