/**
 * Created by Administrator on 2016/9/20.
 */
var express=require("express");
var app=express();//通过express模块创建一个应用程序对象
var bodyParser=require("body-parser");

//static中间件
app.use(express.static(__dirname));//指定这个应用程序使用express模块中的static中间件，并指定一当前服务器文件所在的目录为基址(app2.js)
//body_parser中间件
app.use(bodyParser.urlencoded());

app.get("/userLogin",function(req,res){//提交数据方式为get时
    //console.info(req);
    console.info(req.url);
    console.info(req.query); //获取请求中查询字符串，即请求数据
    res.send();
});

app.post("/userLogin",function(req,res){//提交数据方式为post时
    //console.info(req.query);此时获取数据失败，因为post提交的数据不在请求地址中
    console.info(req.body);
    res.send();
});
//当你不知道你提交的数据方式为什么的时候，你可以写成app.all("/userLogin",function(req,res) 表示都支持

// 随机生成端口号
var server=app.listen(0,function(err){
    if(err){
        console.info(err);
    }else{
        console.info("应用程序启动成功...");
        console.info(server.address());
    }
})