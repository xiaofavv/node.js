/**
 * Created by Administrator on 2016/9/5.
*/
--创建数据库
create database stusys character set utf-8;

--切换数据到 stusys
use stusys;

--创建班级信息表
create table classInfo(
    cid int primary key auto_increment,--班级编号  主键列  自动增长
    cname varchar(100) not null unique,--班级名称 唯一 不能为空
    status int --班级状态
);

--修改自增的起始值
alter table classInfo auto_increment=1001;

--创建学生信息表
create table stuInfo(
    sid int primary key auto_increment, --学生编号  主键列  自动增长
    sname varchar(100) not null ,       --班级名称 唯一 不能为空
    cid int,                            --所在班级编号
    sex varchar(4),                     --性别
    age int,                            --年龄
    pwd varchar(100),                   --密码
    tel varchar(15)                    --联系方式
);

--修改学号的开始值
alter table stuInfo auto_increment=10001;

--添加班级的初始数据  注意：mysql中自增列用0代替
insert into classInfo value(0,"YC22",1);
insert into classInfo value(0,"YC24",1);
insert into classInfo value(0,"YC26",1);

--添加学生的初始数据
insert into stuInfo value(0,"小法",1001,'女',18,'aaaa','18274715172');















