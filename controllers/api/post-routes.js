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
