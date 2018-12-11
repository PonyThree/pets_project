#设置客户端连接服务器编码方式为utf8  
SET NAMES UTF8;    
#丢弃数据库，如果存在pets(宠物)  
DROP DATABASE IF EXISTS  pets;
#创建数据库pets,设置 存储方式为utf8  
CREATE DATABASE pets CHARSET=UTF8;
#进入数据库  
use pets;
#1.创建管理员表(多个管理员---针对一个宠物网站管理者)
CREATE TABLE managers(
	mid TINYINT PRIMARY KEY  AUTO_INCREMENT,
	mname VARCHAR(10)  NOT NULL,
	mphone VARCHAR(11),
	mpic VARCHAR(20+)
);
#向表中插入数据  
INSERT INTO managers values(null,'ponywei','18323479896'),(null,'华华','18523749698');
#2.创建用户表
CREATE TABLE users(
	uid TINYINT PRIMARY KEY AUTO_INCREMENT,
	uname VARCHAR(10)  NOT NULL,
	uphone VARCHAR(11),
	sex VARCHAR(6),
	email VARCHAR(11)
);
#向用户表中插入数据
INSERT INTO users VALUES(null,'张三','18423496921','1','23459452@qq.com'),(null,'李思','18523596922','0','13469482@qq.com');
#查询数据
SELECT * FROM Managers;
SELECT * FROM Users;
#3.创建