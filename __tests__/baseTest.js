// NOTE Package Stating Index
const mysqlr = require('../index');
const cache = require('memory-cache');

/**
 * My mysql local testing address
 * ----------------------
 * host: "localhost",
 * user: "root",
 * password: "mysql",
 * database: "exam_finalize_for_67"
 */


describe("Testing The import", () => {
    test('Testing Import From Memory, the config store there or not', async () => {
        mysqlr.init({
            host: "localhost",
            user: "root",
            password: "mysql",
            database: "mysqlrTesting"
        })
        let check_cache =  cache.get('connString')
        expect(check_cache).not.toEqual(null)
    })

    test('Again Testing Import From Memory, For Check the Import was correctly Working Not Dublicate', async () => {
        mysqlr.init({
            host: "localhost",
            user: "root",
            password: "mysql",
            database: "mysqlrTesting"
        })
        let check_cache =  cache.get('connString')
        expect(check_cache).not.toEqual(null)
    })
})


describe("Testing The Query", () => {
    
    test('Test basic query return', async () => {
        let basic_1 = await mysqlr.query('SELECT * FROM table_1')
        return expect(Array.isArray(basic_1.results)).toEqual(true);
    })

    test('Test basic query error', async () => {
        let basic_1 = await mysqlr.query('SELECT * FROM table_1')
        expect(basic_1.error).toEqual(null);
    })
})


describe("Testing The JSON Insert", () => {
    
    test('JSON insert basic', async () => {
        let basic_1 = await mysqlr.jsonInsert({ table_1: { column_1: 'Hello', column_4: 'Hello' }})
        expect(basic_1.error).toEqual(null);
    })

    test('Insert to selected table ', async () => {
        let basic_1 = await mysqlr.insertSingleTable('table_1', { column_1: 'single1', column_2: 'single2' })
        expect(basic_1.error).toEqual(null);
    })


    test('Insert to selected table with bulk data ', async () => {
        const data_array = [
            { column_1: 'single1', column_2: 'single2' },
            { column_1: 'single1', column_3: 'single3' },
            { column_2: 'single2', column_4: 'single4' }
        ]
        let basic_1 = await mysqlr.bulkInsertSingleTable('table_3', data_array)
        expect(basic_1.error).toEqual(null);
    })

})



describe("Testing data delete", () => {

    test('Delete Table 1', async () => {
        let basic_1 = await mysqlr.clean('table_1')
        expect(basic_1.error).toEqual(null);
    })

    test('Delete Table 2', async () => {
        let basic_1 = await mysqlr.clean('table_2')
        expect(basic_1.error).toEqual(null);
    })

    test('Delete Table 3', async () => {
        let basic_1 = await mysqlr.clean('table_3')
        expect(basic_1.error).toEqual(null);
    })

    test('Delete Table 4', async () => {
        let basic_1 = await mysqlr.clean('table_4')
        expect(basic_1.error).toEqual(null);
    })
})