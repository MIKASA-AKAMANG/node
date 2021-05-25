var express = require('express');
var ejs = require('ejs');
var app = express();
var path = require('path')



var loginctr = require("./routes/login")
var index = require("./routes/index")
var product = require("./routes/product-details")
var shop = require("./routes/shop")
var custodian = require("./routes/custodian")
var zsgc = require("./routes/background")
// 设置模板引擎
app.engine('.html',ejs.__express);
app.set("view engine","html");

// 设置静态文件
app.use(express.static(path.join(__dirname,"public")));

// 登录注册
app.use("/",loginctr);
app.use("/index",index);
app.use("/product-details",product);
app.use("/shop",shop);
app.use("/custodian",custodian);
// 后台增删改查
app.use("/background",zsgc);

app.listen(3000);