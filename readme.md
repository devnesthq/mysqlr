# This package will easy your task with mysql

## It manage all the data processing issue. Build on top of mysql. So you will get all the basic function

### Not Ready, Developing Actully :D

### Doc v-1

# Basic Init

##### Import mysqlr

```
const mysqlr = require('mysqlr');
```

##### At the startup u have to init the mysqlr

```
mysqlr.init({
    host: "localhost",
    user: "root",
    password: "mysql",
    database: "mysqlrTesting"
})
```

This is for my local database. You can use your own details

Simple right !!!

# Oparations

#### Supporse u had a table like this

#### Database Name mysqlrTesting

#### Table name: test1

|T1|T2|T3|T4|
|--|--|--|--|
|At|g2|z3|t4|
|Ae|s2|a3|y4|
|A4|a2|s3|u4|
|At|22|A3|i4|
|Ay|q2|g3|o4|

## Select Query 

Then the query like be

Promise based so just give the query and then what you wanted to do

```
mysqlr.query('SELECT * FROM test1').then(response => {
    consle.log(response)
})
```

For async/await

```
let qry = await mysqlr.query('SELECT * FROM test1')
```

Those are bouth same. So now it your choice. 

## Insert Query

Here mysqlr are defferent. You can insert a json type file easily. No Needed to worry.

Suppose you have a json like

```
{
    test1:
    {
        t1: 'Hello',
        t4: 'Hello'
    }
}
```

Now you wanted insert to the db. You already checked that test1 is the table name. And next is the property and values.

So now just use the jsonInsert. Like

```
    const data = {
                    test1:
                    {
                        t1: 'Hello',
                        t4: 'Hello'
                    }
                }
    mysqlr.jsonInsert(data).then(response => console.log(response))
```

You are done. The Data will be insert to the database. No Need to take any worried. Its worked like sequelize. But in the behide it worked using normal mysql lib.

<br/><br/><br/>

# More Coming. We are still Developing. Hope the will be AWESOME in the END 
