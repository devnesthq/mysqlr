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
            database: "exam_finalize_for_67"
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
        let basic_1 = await mysqlr.query('SELECT * FROM test1')
        return expect(Array.isArray(basic_1.results)).toEqual(true);
    })

    test('Test basic query error', async () => {
        let basic_1 = await mysqlr.query('SELECT * FROM test1')
        expect(basic_1.error).toEqual(null);
    })
})