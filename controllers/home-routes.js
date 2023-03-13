//middleware
const router = require('express').Router();
const { User, Post } = require('../models');
const withAuth = require('../utils/auth');
  
 // signup GET route
router.get('/signup', (req, res) => {
    res.render('signup');
  });
  
// loin GET route
router.get('/login', (req, res) => {
    res.render('login');
  });
  
  // GET route for homepage
router.get('/', async (req, res) => {
    //find all posts
    try {
        const blogData = await Post.findAll({
            include: [{
                model: User,
                attributes: ( ['username'])
              }],
          });
        // passes blog data and login sessions into homepage
        const posts = blogData.map((post) => post.get({ plain: true }));
        res.render('home');
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    });

    // GET for panel page
router.get('/panel', async (req, res) => { // withAuth: only if user is logged in, the callback function is executed
    try {
      const blogData = await Post.findAll({
        include: [{
          model: User,
          attributes: ['username'],
        }]
       /*() where: {
          user_id: req.session.user_id,
        },*/
      });
      const posts = blogData.map((post) => post.get({ plain: true }));
      res.render('panel');
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

        res.render('post');
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET for adding/deleting/editing posts
// withAuth middleware preventing route access unless logged in 
router.get('/panel/new', withAuth, (req, res) => { 
    res.render('new');
  });

  router.get('/panel/post/:id', withAuth, async (req, res) => {
    try {
      const blogData = await Post.findByPk(req.params.id, {});
      const post = blogData.get({ plain: true });
      res.render('edit');
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  module.exports = router;