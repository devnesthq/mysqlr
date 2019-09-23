const cache = require('memory-cache');
const init = require('../init/init')

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
                    console.log(error);
                    resolve({error, results})
                } else {
                    resolve({error, results})
                } 
            });
        }
    })
}