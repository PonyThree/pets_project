/**
 * Created by web on 2018/12/24.
 */
    //�����������
const express=require("express");
const bodyParser=require("body-parser");
const favicon =require("serve-favicon");
//1.����web������
var app=express();
//2.���������˿�3000
app.listen(3000);
//3.�йܾ�̬��Դ��publicĿ¼��
app.use(express.static('public'));
//4.ʹ��body-parser�м����post��������ݽ���Ϊ����
//һ��Ҫд��·��֮ǰ
app.use(bodyParser.urlencoded({
    extended:false
}));
//·�������ص���Ӧ/֮��
