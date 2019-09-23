// Import Modules
const init                          = require('./core/init/init')
const query                         = require('./core/query/query').query
const jsonInsert                    = require('./core/insert/insert').jsonInsert
const jsonInsertSelectTable         = require('./core/insert/insert').jsonInsertSelectTable
const arrayInsertSelectTableBulk    = require('./core/insert/insert').arrayInsertSelectTableBulk
const clean                         = require('./core/clean/clean').clean
const cleanByItem                   = require('./core/clean/clean').cleanByItem


// Module Exports
module.exports = {
    init                    : init,
    query                   : query,
    jsonInsert              : jsonInsert,
    insertSingleTable       : jsonInsertSelectTable,
    bulkInsertSingleTable   : arrayInsertSelectTableBulk,
    clean                   : clean,
    cleanByItem             : cleanByItem,
}