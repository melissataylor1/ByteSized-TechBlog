const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

//post route for new nlog post
router.post('/', withAuth, async (req, res) => {
    try {
        const blogData = await Post.create({
            title: req.body.title,
      content: req.body.content,
      user_id: req.session.user_id,
    });

        res.status(200).json(blogData);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

//post route for editing blog post
router.put('/:id', async (req, res) => {
    try {
      const blogData = await Post.update({
        title: req.body.title,
        content: req.body.content,
        user_id: req.session.user_id,
      },
      {
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json(blogData);
    } catch (err) {
        res.status(500).json(err);
      };
  });
  


//DELETE route for deleting a blog
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const blogData = await Post.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!blogData) {
            res.status(404).json({ message: 'Blog Not Found' });
            return;
        }

        res.status(200).json(blogData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;