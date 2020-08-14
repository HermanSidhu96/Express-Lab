var express = require('express');
var router = express.Router();
const mySkill= require('../models/users');

const hermansSkills = {
  title: 'Dev Skills',
  skill: mySkill
}
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('skills', hermansSkills);
});

module.exports = router;
