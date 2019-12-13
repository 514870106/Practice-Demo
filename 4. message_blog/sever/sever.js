var http = require("http");
var url = require("url");
var qs = require("querystring");
var mysql = require('mysql');
// 连接数据库
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
    if (req.method == "GET") {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        var params = url.parse(req.url, true).query;
        console.log(params.type);
        //查询数据表中有多少个数据
        var sql = 'SELECT count(*) as nb  FROM blog';
        if (params.type == "nb"){
            //执行查询
            connection.query(sql, function (err, result) {
                if (err) {
                    console.log('[SELECT ERROR] - ', err.message);
                    return;
                }
                // 去除RowDataPacket，转换为Json
                var string = JSON.stringify(result);
                var data = JSON.parse(string);
                //返回数据——留言人数
                res.end((data[0].nb).toString());
            })
        }
        if(params.type == 'msg'){
        //查询数据表最新的10条留言
        var sql = 'SELECT count(*) as nb  FROM blog';
        }
    }
    if (req.method == "POST"){

    }
}).listen(8080, function (err) {
    if (!err) {
        console.log("成功创建服务器，端口号为8080")
    }
})