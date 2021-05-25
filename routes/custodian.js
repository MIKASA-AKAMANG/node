var express = require("express");
var router = express.Router();
var connection = require("./cust")
var formidable = require("formidable")

router.get("/",function(req,res){
    res.render("custodian")
})


router.post("/cust_login",function(req,res){
    var form = new formidable.IncomingForm();
    form.parse(req,function(err,fields){
        var password = fields.password;
        var custemail = fields.email;
        var query = 'select * from cust where custemail ="'+custemail+'" and password = "'+password+'"';
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

router.post("/cust_regist",function(req,res){
    var form = new formidable.IncomingForm();
    form.parse(req,function(err,fields){
        var username = fields.name;
        var password = fields.password;
        var custemail = fields.email;
        
        var query = 'insert into cust values("'+username+'","'+password+'","'+custemail+'")';
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