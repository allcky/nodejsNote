var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
    res.send('前台首页');
})
router.get('/about',function (req,res) {
    res.send('前台关于我们')
})
router.get('/concatus',function (req,res) {
    res.send('联系我们')
})

module.exports = router;