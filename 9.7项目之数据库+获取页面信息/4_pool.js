/**
 * Created by Administrator on 2016/9/7.
 */
var mysql=require("mysql");

var pool=mysql.createPool({
    host:"127.0.0.1",
    port:3306,
    database:"stusys",
    user:"root",
    password:"aaaa",
    connectionLimit:20,
    queueLimit:10
});

pool.getConnection(function(err,connection){//从连接池中获取一个连接
    if(err){
        console.info("获取数据连接失败..."+err);
    }else{
        //查询每个班级以及每个班级的学生信息
        //connection.query({sql:"select * from classInfo c,stuInfo s where c.cid=s.cid",nestTable:"_"},function(err,result){

        //左外连接:以left join左边的表为基表，基表中所有的数据都显示，非基本表没有的用null补空  right join:右外连接  full join：完全外连接 inner join：内连接
       // connection.query({sql:"select * from classInfo c left join stuInfo s on c.cid=s.cid",nestTable:"_"},function(err,result){

        //分页查询 limit n,m n:从第几条记录开始显示 m:显示几条  limit  (n-1)*m,m
        connection.query("select * from classInfo order by cid limit 0,2",function(err,result){
            result.forEach(function(row){
                var str="";
                for(var attr in row){
                    str+=row[attr]+"\t";
                }
                console.info(str);
            });
            connection.release();//将连接还给数据库连接池

            pool.end();
        });
    }
});