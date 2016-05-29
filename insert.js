var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node_test_data'
    //,multipleStatements:true, node-mysql默认关闭了复合式语法的编写，防止sql注入。
})
connection.connect();


var article = {
    author: 'pdeng',
    title: '默认关闭了复合式语法的编写',
    body: 'balabal insert'
}
//insert
var query = connection.query('insert into articles set ?', article, function(err, result) {
    if (err) {
        console.error();
        return;
    }
    console.info("insert结果",query.sql);
})
