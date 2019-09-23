const cache = require('memory-cache');
const init = require('../init/init')

/**
 * 
 * @param {String} table_name Clean all the record.
 */

// NOTE Clean all data from table
exports.clean = (table_name) => {
    return new Promise((resolve, reject) => {

        let qry = `DELETE FROM ${table_name} WHERE 1`;

        const connection = init(cache.get('connString'));
        connection.query(qry, function (error, results, fields) {
            if (error) {
                resolve({error: 'Data Not Deleted', results})
            } else {
                resolve({error: null, results})
            } 
        })
    })
}


/**
 * 
 * @param {String} table_name   Cleaning table name .
 * @param {String} col_name     Cleaning colums name.
 * @param {String} item_name    Cleaning item name.
 */
// Clean Spacific item from the table colume
exports.cleanByItem = (table_name, col_name, item_name) => {
    return new Promise((resolve, reject) => {

        let qry = `DELETE FROM ${table_name} WHERE ${col_name} = "${item_name}"`;

        const connection = init(cache.get('connString'));
        connection.query(qry, function (error, results, fields) {
            if (error) {
                resolve({error: 'Data Not Deleted', results})
            } else {
                resolve({error: null, results})
            } 
        })
    })
}