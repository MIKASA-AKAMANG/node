var express = require("express");
var router = express.Router();
var connection = require("./user")
var formidable = require("formidable")



router.get("/",function(req,res){
    res.render("background")

})
// 新增
router.post("/insert",function(req,res){
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
            res.json({"status":3});
        })
    })
})





// 修改
router.post("/update",function(req,res){
    var form = formidable.IncomingForm();
    form.parse(req,function(err,fileds){
        var username = fileds.name;
        var password = fileds.password;
        var query = 'update user set username ="'+username+'"，password = "'+password+'"';
        connection.query(query,function(err,rows){
            if(err){
                console.log(err);
                return
            }
            res.json({"data":2})
        })
    })
})




router.post("/delete",function(req,res){
    var form = formidable.IncomingForm();
    form.parse(req,function(err,fileds){
        var username = fileds.username;
      
        var query = 'delete from user where username = "'+username+'" ';
        connection.query(query,function(err,rows){
            if(err){
                console.log(err);
                return
            }
            res.json({"data":1})
        })
    })
})




router.get("/select",function(req,res){
    var form = formidable.IncomingForm();
    form.parse(req,function(err,fileds){
        var query ='select * from user'
        connection.query(query,function(err,rows){
            res.json({"data":rows})
        })
    })
})


module.exports = router;