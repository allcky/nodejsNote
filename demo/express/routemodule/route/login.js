var express = require('express');
var router = express.Router();


// localhost/login/
router.get('/',function(req,res){
    res.send('登陆');
})

//localhost/login/reg
router.get('/reg',function (req,res) {
    res.send('注册')
})

module.exports = router;