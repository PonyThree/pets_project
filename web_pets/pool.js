/**
 * Created by web on 2018/12/24.
 */
//���ӳ�ģ��
//�������ݿ��������
const mysql=require("mysql");
var pool=mysql.createPool({
    host:'127.0.0.1',
    port:3306,
    user:'root',
    password:"",
    database:'pets',
    //�������������
    connectionLimit:20
});
//�������ݿ����ӳض���
module.exports=pool;
