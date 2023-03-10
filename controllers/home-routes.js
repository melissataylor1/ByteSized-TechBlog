//middleware
const router = require('express').Router();
const { User, Post } = require('../models');
const withAuth = require('../utils/auth');


// GET route for homepage (this)
router.get('/', async (req, res) => {
    try {
      const dbPostData = await Post.findAll({
        include: [{
            model: User,
            attributes:(['username'],['date_created'])
          }],
      });
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      res.render('homepage', { posts, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
 // signup GET route
router.get('/signup', (req, res) => {
    res.render('signup', { loggedIn: req.session.loggedIn });
  });
  
// loin GET route
router.get('/login', (req, res) => {
    res.render('login', { loggedIn: req.session.loggedIn });
  });
  