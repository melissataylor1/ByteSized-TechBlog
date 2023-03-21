const router = require('express').Router();
const { Blog, User, Comment } = require('../../models');
//GET route for finding all blog entries 
router.get('/', async (req, res) => {
    Blog.findAll({})
    .then(blogData => res.json(blogData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
//an HTTP GET request for a specific blog post
//id of blog post passed in as parameter to query the db for the blog post
router.get('/:id', async (req, res) => {
    try {
		const blogData = await Blog.findByPk(req.params.id, {
			include: [
				{
					model: User,
					attributes: ['username'],
				}, {
					model: Comment,
					include: [
						User
					]
				}
			],
		});
		const blog = blogData.get({
			plain: true
		});

		res.render('blog', {
			...blog,
			loggedIn: req.session.loggedIn
		});
	} catch (err) {
		res.status(500).json(err);
	}
});
//POST route for creating new blog
router.post('/', async (req, res) => {
    try {
        const newBlog = await Blog.create({
          ...req.body,
          user_id: req.session.user_id,
        });
    
        res.status(200).json(newBlog);
      } catch (err) {
        res.status(400).json(err);
      }
});
//DELETE route for deleting posts
router.delete('/:id', async (req, res) => {
    try {
        const blogData = await Blog.destroy({
          where: {
            id: req.params.id,
            user_id: req.session.user_id,
          },
        });
    
        if (!blogData) {
          res.status(404).json({ message: '404 BLOG NOT FOUND!!!!' });
          return;
        }
    
        res.status(200).json(blogData);
      } catch (err) {
        res.status(500).json(err);
      }
    });
    

module.exports = router;