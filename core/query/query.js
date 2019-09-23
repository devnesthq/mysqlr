const cache = require('memory-cache');
const init = require('../connector/init').connect
const disconnect = require('../connector/init').disconnect


// ANCHOR query
// NOTE Query of the mysql. Simple Query For fast Work
/**
 * This return only promise. Just give the query and get return the result.
 * @param {*} qry Query String
 */
exports.query = (qry) => {
    return new Promise((resolve, reject) => {
        
        if(cache.get('connString') === null){
            resolve({error: 'No String Found', results: null})
        } else {
            
            const connection = init(cache.get('connString'));
            connection.query(qry, function (error, results, fields) {
                if (error) {
                    disconnect()
                    console.log(error);
                    resolve({error, results})
                } else {
                    disconnect()
                    resolve({error, results})
                } 
            });
        }
    })
}



// NOTE Query of the mysql. Simple Query For fast Work
/**
 * This return only promise. Just give the query and get return the result.
 * @param {String} table_name   Table Name
 * @param {String} colume_name  Colume Name
 * @param {String} item_name    Item Name
 */
exports.queryForItem = (table_name, colume_name, item_name) => {
    return new Promise((resolve, reject) => {
        
        if(cache.get('connString') === null){
            resolve({error: 'No String Found', results: null})
        } else {
            
            let qry = `SELECT * FROM ${table_name} WHERE ${colume_name} = "${item_name}"`

            const connection = init(cache.get('connString'));
            connection.query(qry, function (error, results, fields) {
                if (error) {
                    disconnect()
                    console.log(error);
                    resolve({error, results})
                } else {
                    disconnect()
                    resolve({error, results})
                } 
            });
        }
    })
}