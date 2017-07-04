var express = require('express');
var router = express.Router();
var isLogin = false;
router.use(function (req,res,next) {
    if(isLogin){
        next();
    }else{
        res.redirect('/login')
    }
})
// localhost/admin
router.get('/',function (req,res) {
    res.send('后台主页')
})

router.get('/category',function (req,res) {
    res.send('后台栏目')
})
router.get('/user',function (req,res) {
    res.send('用户管理')
})

router.get('/article',function (req,res) {
    res.send('文章页面')
})

module.exports = router;