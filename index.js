// Import Modules
const init                          = require('./core/connector/init').connect
const query                         = require('./core/query/query').query
const jsonInsert                    = require('./core/insert/insert').jsonInsert
const jsonInsertSelectTable         = require('./core/insert/insert').jsonInsertSelectTable
const arrayInsertSelectTableBulk    = require('./core/insert/insert').arrayInsertSelectTableBulk
const del                       = require('./core/clean/clean').delete
const deleteByItem                   = require('./core/clean/clean').deleteByItem


// Module Exports
module.exports = {
    init                    : init,
    query                   : query,
    jsonInsert              : jsonInsert,
    insertSingleTable       : jsonInsertSelectTable,
    bulkInsertSingleTable   : arrayInsertSelectTableBulk,

    delByItem               : deleteByItem,
    del                     : del,

    // Depected -> its not convenient
    clean                   : del,
    cleanByItem             : deleteByItem,
}