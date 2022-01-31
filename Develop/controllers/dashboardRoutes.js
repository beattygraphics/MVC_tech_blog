const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const withAuth = require('../utils/auth');

//Routes

router.get('/', (req, res) => {
  User.findAll({
    attributes: { exclude: ['password'] }
  })
    .then(userData => res.json(userData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});