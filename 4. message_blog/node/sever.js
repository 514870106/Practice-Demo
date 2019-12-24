var http = require("http");
var url = require("url");
var qs = require("querystring");
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: '180.76.189.152',//连接百度云数据库      
    user: 'hjc_sql',//用户名              
    password: '23191306shinee',//密码       
    port: '3306',//端口号（默认3306）                   
    database: 'joey'//数据库名称 
});
connection.connect();
//创建服务器
http.createServer(function (req, res) {
    //设置请求头，允许所有域名访问，解决跨域请求
    res.setHeader("Access-Control-Allow-Origin", "*");
    var pathName = url.parse(req.url).pathname;
    if (pathName == "/msg") {
        res.writeHead(200, { 'Content-Type': 'text/plain', 'charset': 'uft-8' });
        var sql1 = 'SELECT user_name as name, mes as msg FROM blog ORDER BY mes_time LIMIT 6';
        connection.query(sql1, function (err, result) {
            if (err) {
                console.log('[SELECT ERROR] - ', err.message);
                return;
            }
            var string = JSON.stringify(result);
            var data = JSON.parse(string);
            console.log(string);
            res.end(string);
        })
    }
    if (pathName == "/submit") {
        var result = "";
        req.addListener("data", function (chunk) {
            result += chunk;
        });
        req.on("end", function () {
            res.writeHead(200, { 'content-type': 'text/html;charset=utf-8' });
            var user = JSON.parse(result);
            console.log(user);
            var addsql = 'INSERT blog(user_id,user_name,mes,mes_time) VALUES(0,?,?,?)';
            //将对象转化为数组
            var arr = [];
            var i = 0;
            for (var item in user) {
                arr[i] = user[item];
                i++
            }
            console.log(arr);
            connection.query(addsql, arr, (err, result) => {
                if (err) {
                    console.log('[增加失败] - ', err.message);
                    return;
                }
                console.log('--------------INSERT-------------');
                console.log('增加成功 ID:', result.insertId);
                console.log('增加成功:', result);
                console.log('--------------------------------\n\n');
            });
            res.end("添加数据成功");
        })
    }
}).listen(3000, function (err) {
    if (!err) {
        console.log("成功创建服务器，端口号为3000")
    }
})