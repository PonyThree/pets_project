/**
 * Created by web on 2018/12/24.
 */
//连接池模块
//引入数据库第三方包
const mysql=require("mysql");
var pool=mysql.createPool({
    host:'127.0.0.1',
    port:3306,
    user:'root',
    password:"",
    database:'pets',
    //设置最大连接数
    connectionLimit:20
});
//导出数据库连接池对象
module.exports=pool;
