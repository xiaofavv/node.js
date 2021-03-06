/**
 * Created by Administrator on 2016/9/20.
 */
var express=require("express");
var fs=require("fs");
var multer=require("multer");

var upload=multer({dest:"uploads/"});//指定文件上传的目录

var app=express();//通过express模块创建一个应用程序对象

app.use(express.static(__dirname));//使用静态中间件

app.post("/uploadFile",upload.single("file"),function(req,res,next){//file  是input表单中name的名字
    console.info(req.file);
    //console.info(req.body);
    if(req.file==undefined){//说明用户没有选择图片
        res.send();
    }else{
        var path=__dirname+"/uploads/"+req.file.originalname;

        fs.renameSync(req.file.path,path);//重命名
        response={
            message:"文件上传成功...",
            filename:req.file.originalname
        };
        res.send(JSON.stringify(response));
    }
});


app.listen(8888,function(err){
    if(err){
        console.info(err);
    }else{
        console.info("服务器启动成功...")
    }
});