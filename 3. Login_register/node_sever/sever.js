var http = require("http");
var url = require("url");
var qs = require("querystring");
var fs = require("fs");
//创建服务器
http.createServer(function(req , res){
    //设置请求头，允许所有域名访问，解决跨域请求
    res.setHeader("Access-Control-Allow-Origin","*");
    //定义一个post变量，暂时存储Post请求信息
    var post = "";
    // 通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
    req.on('data', function(chunk){    
        post += chunk;
    });
    //获取前端路由地址
    var pathName = url.parse(req.url).pathname;
    //监听req的事件，
    req.on('end',function(){
        post = qs.parse(post);
        console.log(post)
    })
}).listen(8080,function(err){
    if(!err){
        console.log("成功创建服务器，端口号为8080")
    }
})