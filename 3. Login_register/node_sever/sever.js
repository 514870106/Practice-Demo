var http = require("http");
var url = require("url");
var qs = require("querystring");
var fs = require("fs");
//创建服务器
http.createServer(function (req, res) {
    //设置请求头，允许所有域名访问，解决跨域请求
    res.setHeader("Access-Control-Allow-Origin", "*");
    //定义一个post变量，暂时存储Post请求信息
    var post = "";
    // 通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
    req.on("data", function (chunk) {
        post += chunk;
    });
    //获取前端路由地址
    var pathName = url.parse(req.url).pathname;
    //监听end事件，
    req.on("end", function () {
        post = qs.parse(post);
        console.log("username:" + post.username + ' password：' + post.password);
        console.log(pathName);
        fs.readFile("./node_sever/data_base.txt", "utf-8", function (err, data) {
            if (err) {
                console.log(err)
            }
            else {
                if (!data) {
                    if (pathName == '/login') {
                        res.end("该用户不存在");
                        return;
                    }
                    if (pathName == '/register') {
                        //创建一个数组一个对象来保存帐号和密码
                        var arr = [];
                        var obj = {};
                        //把用户的帐号密码保存
                        obj.username = post.username;
                        obj.password = post.password;
                        arr.push(obj);
                        //同步写入db.txt文件，必须是同步进行
                        fs.writeFileSync("./node_sever/data_base.txt", JSON.stringify(arr), "utf-8");
                        res.end("注册成功!");
                        return;
                    }
                }
                else {
                    //把数据转成JSON对象，以便我们使用
                    var arr = JSON.parse(data);
                    console.log(arr);
                    //遍历整个保存数据的数组  判断登录注册
                    for (var i = 0; i < arr.length; i++) {
                        var obj = arr[i];
                        if (obj.username == post.username) {
                            if (pathName == "/login") {
                                if (obj.password == post.password) {
                                    res.end("登录成功!");
                                    return;
                                } else {
                                    res.end("密码错误！");
                                    return;
                                }
                            }
                            if (pathName == "/register") {
                                res.end("该用户已存在!");
                                return;
                            }
                        }
                    }
                    if (pathName == "/login") {
                        res.end("用户名不存在!");
                        return;
                    }
                    if (pathName == "/register") {
                        //创建新对象写入数据
                        var obj = {};
                        obj.username = post.username;
                        obj.password = post.password;
                        arr.push(obj);
                        fs.writeFileSync("./node_sever/data_base.txt", JSON.stringify(arr), "utf-8");
                        res.end("注册成功!");
                        return;
                    }
                }
            }
        })
    })
}).listen(8080, function (err) {
    if (!err) {
        console.log("成功创建服务器，端口号为8080")
    }
})