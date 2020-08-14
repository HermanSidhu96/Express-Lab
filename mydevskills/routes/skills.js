var express = require('express');
var router = express.Router();
const code= require('../models/skills');

const myCode= {
    programmingarray: code.developerskills
}

//this router handles  the web browsers requests server 
//to send back HTML page when when we enter the extension
router.get('/codeskills', function (req,res){
    console.log(myCode);
    res.render('code.ejs', myCode)
})

router.post('/formsubmitskill', function (req,res) {
    code.developerskills.push(req.body.inputskills)
    res.send(code.developerskills)
})

module.exports = router;