const mysql = require('mysql');
const cache = require('memory-cache');

// NOTE State mysql at the start 
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

module.exports = {
    init: init,
    query: query
}