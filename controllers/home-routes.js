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
        const blogData = await Blog.findAll({
            include: [
                {
                    model: User,
                    attributes:(['name'], ['date_created'])
                },
            ],
        });
        // passes blog data and login sessions into homepage
        const blogs = blogData.map((blog) => blog.get({ plain: true }));
        res.render('homepage', { 
            blogs, 
            logged_in: req.session.logged_in 
        });
    } catch (err) {
        res.status(500).json(err);
    }
});