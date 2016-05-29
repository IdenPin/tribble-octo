var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'node_test_data'
    //,multipleStatements:true, node-mysql默认关闭了复合式语法的编写，防止sql注入。
})
connection.connect();


var article = {
    author: 'pdeng',
    title: 'Nsode is not difficult',
    body: 'balabal'
}

//insert
// var query = connection.query('insert into articles set ?', article, function(err, result) {
//     if (err) {
//         console.error();
//         return;
//     }
//     console.info("insert结果",query.sql);
// })


//select
// connection.query('select * from articles', function(err, result) {
//     console.info("select结果：",result);
// })



//select id
//var id = '1;drop table articles;';

var id = '1';
connection.query('select * from articles where id='+id,function(err,result){
  console.info(result);
})
