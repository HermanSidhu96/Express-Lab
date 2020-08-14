var express = require('express');
var router = express.Router();
var devSkill= require('../models/users')


const skill= {
    skilltype: devSkill.developerskills
}
/* GET users listing. */

function developerskills (req, res, next) {
  res.render('users.ejs', skill);
};

function index(req, res, next) {
  res.render('views/skills.ejs', {
      skills: devSkill.getAll()
  })
}

function show(req, res) {
  res.render('views/skills', {
    skills: devSkill.getOne(req.params.id)
  });
}


module.exports = {
    developerskills: developerskills,
    index: index,
    show: show
}