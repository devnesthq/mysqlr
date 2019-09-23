const cache = require('memory-cache');
const init = require('../init/init')


// ANCHOR jsonInsert
// NOTE Query of the mysql. Simple Query For fast Work
/**
 * This return only promise. It will entry bulk. Based on the key of array field and json data
 * @param {JSON} json_data Query String
 */
exports.jsonInsert = (json_data) => {
    return new Promise((resolve, reject) => {

        let qry = 'INSERT INTO', keys = '';
        Object.keys(json_data).forEach(key => {
            keys = key
            qry = qry + ' ' + key
        }) 
        qry = qry + ' SET ?' ;
        
        const connection = init(cache.get('connString'));
        connection.query(qry, json_data[keys], function (error, results, fields) {
            if (error) {
                resolve({error, results})
            } else {
                resolve({error, results})
            } 
        })
    })
}


// ANCHOR Insert data to spacific table which specified
// NOTE Query of the mysql. Simple Query For fast Work
/**
 * This return only promise. It will entry bulk. Based on the key of array field and json data
 * @param {String}  table_name  Query String
 * @param {JSON}    json_data   Query String
 */
exports.jsonInsertSelectTable = (table_name, json_data) => {
    return new Promise((resolve, reject) => {

        let qry = 'INSERT INTO ' + table_name ;
        qry = qry + ' SET ?' ;
        
        const connection = init(cache.get('connString'));
        connection.query(qry, json_data, function (error, results, fields) {
            if (error) {
                resolve({error, results})
            } else {
                resolve({error, results})
            } 
        })
    })
}


// ANCHOR Insert bulk data to single table
// NOTE This will bulk data entry to selected table. This is json array insert
/**
 * This return only promise. It will entry bulk. Based on the key of array field and json data
 * @param {String}  table_name          Query String
 * @param {JSON}    json_array_data     Query String
 */
exports.arrayInsertSelectTableBulk = (table_name, json_array_data) => {
    return new Promise((resolve_level_1, reject_level_1) => {
        if(Array.isArray(json_array_data)){
            Promise.all(json_array_data.map(json_item => {
                return new Promise((resolve_level_2, reject_level_2) => {

                    let qry = 'INSERT INTO ' + table_name ;
                    qry = qry + ' SET ?' ;
                    
                    const connection = init(cache.get('connString'));
                    connection.query(qry, json_item, function (error, results, fields) {
                        if (error) {
                            resolve_level_2({error, results})
                        } else {
                            resolve_level_2({error, results})
                        } 
                    })
                })
            })).then(return_data => {
                resolve_level_1({error: null, results: return_data})
            })
        } else {
            resolve_level_1({error: 'Sending array is not a array ', results: null})
        }
    })
}