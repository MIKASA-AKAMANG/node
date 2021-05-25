var express = require("express");
var router = express.Router();
var connection = require("./user")
var formidable = require("formidable")

router.get("/login",function(req,res){
    res.render("login")
})

router.get("/index",function(req,res){
    res.render("index")

})

router.post("/login",function(req,res){
    var form = new formidable.IncomingForm();
    form.parse(req,function(err,fields){
        var username = fields.name;
        var password = fields.password;
        var query = 'select * from user where username ="'+username+'" and password = "'+password+'"';
        connection.query(query,function(err,rows){
            if(err){
                console.log(err);
                return;
            }console.log(rows[0]);
            if(!rows[0]){
                res.json({"status":-1});
            }else{
                res.json({"status":1});
            }
        })
    })
})

router.post("/regist",function(req,res){
    var form = new formidable.IncomingForm();
    form.parse(req,function(err,fields){
        var username = fields.name;
        var password = fields.password;
        var query = 'insert into user values("'+username+'","'+password+'")';
        connection.query(query,function(err,rows){
            if(err){
                console.log(err);
                return;
            }
            res.json({"status":1});
        })
    })
})



module.exports = router;