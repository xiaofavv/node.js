/**
 * Created by Administrator on 2016/9/5.
 */
var mysql=require("mysql");
var connection=mysql.createConnection({
    host:"127.0.0.1", //指定服务器所在地址，默认为localhost
    port:3306,          //指定服务器的端口号
    database:'stusys',//需要连接的mysql数据库名
    user:'root',       //指定连接mysql数据库时使用的用户名
    password:"aaaa" , //连接mysql数据库的密码
    multipleStatements:true //执行多条语句
});

exports.conn=connection;