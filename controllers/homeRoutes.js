const express = require('express');
const router = express.Router();
const { Blog, User, Comment } = require('../models');

// GET route for homepage

router.get('/', async (req, res) => {
    Blog.findAll({include:[User,Comment]}).then(blogs=>{
        //outputs the blog entries from the database as Sequelize objects
        const blogsHbsData = blogs.map(blog=>blog.get({plain:true}))
        console.log(blogs);
        console.log("==============")
        console.log(blogsHbsData) 
        //rendering 'homepage' view and passing in:
        res.render('homepage', {
            //1. an array of blog posts
            blogs:blogsHbsData,
            //2. boolean value that indicates whether the user is logged in or not
            loggedIn: req.session.loggedIn,
            //3. the user's unique ID if they are logged in
            user_id: req.session.user_id
        })
        })
});

// GET route for login 

router.get('/login', (req, res) => {
    if(req.session.loggedIn) {
        return res.redirect('/dashboard')
    }
    res.render('login', {
        loggedIn: false,
        user_id: null
      })
});
/* GET route for signup
router.get('/signup', (req, res) => {
    res.render('signup');
});*/

//GET route for dash page with posts
router.get('/dashboard', async (req, res) => {
    try {
		const userData = await User.findByPk(req.session.user_id, {
			include: [Blog],
		});

		const user = userData.get({
			plain: true
		});

		res.render('dashboard', {
			...user,
			loggedIn: true
		});
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;