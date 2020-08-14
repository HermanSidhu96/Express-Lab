var express = require('express');
var router = express.Router();
const mySkill= require('../controllers/users');
/* GET users listing. */
router.get('/', mySkill.developerskills);
router.get('/skills', function(req, res, next) {
  res.send('respond with a skill')
});

module.exports = router;
