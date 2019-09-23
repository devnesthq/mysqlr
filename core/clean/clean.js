const cache = require('memory-cache');
const init = require('../init/init')



// NOTE Clean all data from table
/**
 * 
 * @param {String} table_name Clean all the record.
 */
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

// NOTE Clean Spacific item from the table colume
/**
 * 
 * @param {String} table_name   Cleaning table name .
 * @param {String} col_name     Cleaning colums name.
 * @param {String} item_name    Cleaning item name.
 */
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