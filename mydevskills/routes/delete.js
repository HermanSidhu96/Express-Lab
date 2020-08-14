var express = require('express');
var router = express.Router();
const code = require('../models/skills');

const myCode= {
    programmingarray: code.developerskills
}
router.get('/formdeleteskill', function (req,res){
    console.log(myCode);
    res.render('code.ejs', myCode)
})

router.post('/formdeleteskill', function (req,res) {
    let deleteIndex = code.developerskills.indexOf(req.body.deleteskills)
    code.developerskills.splice(deleteIndex, 1)
    res.send(code.developerskills)
})

module.exports = router;