const mysql = require('mysql');
const cache = require('memory-cache');

 
const init = (connString) => {

    if(cache.get('connString')){
        cache.del('connString')
    }

    cache.put('connString', connString)
    return mysql.createConnection(connString);
}

const query = (qry) => {
    return new Promise((resolve, reject) => {
        if(cache.get('connString') === null){
            resolve('App Not Init')
        } else {
            // let conn = cache.get('connString') 
            
            const connection = init(cache.get('connString'));

            connection.query(qry, function (error, results, fields) {
                if (error) {
                    resolve({ message: 'Mysql Error', error: error})
                } else {
                    resolve({message: 'Return Data', return: results})
                } 
            });
        }
    })
}

module.exports = {
    init: init,
    query: query
}