const mysql = require('mysql');
const redis = require("redis");
const credis_client = redis.createClient();
 
const init = (connString) => {

    if(credis_client.get('connString')){
        credis_client.del('connString')
    }

    credis_client.set('connString', connString)
    return mysql.createConnection(connString);
}

const query = (qry) => {
    return new Promise((resolve, reject) => {
        if(credis_client.get('connString') === null){
            resolve('App Not Init')
        } else {
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