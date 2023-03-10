//middleware
const router = require('express').Router();
const { User, Post } = require('../models');
const withAuth = require('../utils/auth');
  
 // signup GET route
router.get('/signup', (req, res) => {
    res.render('signup', { loggedIn: req.session.loggedIn });
  });
  
// loin GET route
router.get('/login', (req, res) => {
    res.render('login', { loggedIn: req.session.loggedIn });
  });
  
  // GET route for homepage
router.get('/', async (req, res) => {
    //find all posts
    try {
        const blogData = await Post.findAll({
            include: [{
                model: User,
                attributes: ( ['username'], ['date_created'])
              }],
          });
        // passes blog data and login sessions into homepage
        const posts = blogData.map((post) => post.get({ plain: true }));
        res.render('home', { 
            posts, 
            logged_in: req.session.logged_in 
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    });

    // GET for panel page
router.get('/panel', withAuth, async (req, res) => { // withAuth: only if user is logged in, the callback function is executed
    try {
      const blogData = await Post.findAll({
        include: [{
          model: User,
          attributes: ['username'],
        }],
        where: {
          user_id: req.session.user_id,
        },
      });
      const posts = blogData.map((post) => post.get({ plain: true }));
      res.render('panel', { posts, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
// GET singular post
router.get('/post/:id', async (req, res) => {
    try {
        const blogData = await Post.findByPk(req.params.id, {
            include: [{
                model: Comment,
                include: [{
                  model: User,
                }]
              }, { model: User }],
            });

        const post = blogData.get({ plain: true });

        res.render('post', { post, loggedIn: req.session.loggedIn, commenter: "Commenter" });
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET for adding/deleting/editing posts
// withAuth middleware preventing route access unless logged in 
router.get('/panel/new', withAuth, (req, res) => { 
    res.render('new', { loggedIn: req.session.loggedIn });
  });

  router.get('/panel/post/:id', withAuth, async (req, res) => {
    try {
      const blogData = await Post.findByPk(req.params.id, {});
      const post = blogData.get({ plain: true });
      res.render('edit', { post, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  module.exports = router;