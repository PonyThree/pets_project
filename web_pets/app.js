/**
 * Created by web on 2018/12/24.
 */
    //引入第三方包
const express=require("express");
const bodyParser=require("body-parser");
const favicon =require("serve-favicon");
//1.创建web服务器
var app=express();
//2.创建监听端口3000
app.listen(3000);
//3.托管静态资源到public目录下
app.use(express.static('public'));
//4.使用body-parser中间件将post请求的数据解析为对象
//一定要写在路由之前
app.use(bodyParser.urlencoded({
    extended:false
}));
//路由器挂载到对应/之下
