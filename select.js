var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node_test_data'
    //,multipleStatements:true, node-mysql默认关闭了复合式语法的编写，防止sql注入。
})
connection.connect();



// select
connection.query('select * from articles', function(err, result) {
    console.info("select结果：",result);
})

// var id = '1';
// connection.query('select * from articles where id='+id,function(err,result){
//   console.info(result);
// })
