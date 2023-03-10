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
        res.render('homepage', { 
            posts, 
            logged_in: req.session.logged_in 
        });
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

