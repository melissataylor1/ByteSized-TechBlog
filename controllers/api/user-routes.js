const router = require('express').Router();
const { User } = require('../../models');

// POST route new user sign up 
router.post('/', async (req, res) => {
    try {
        const UserData = await User.create({
            username: req.body.username,
            password: req.body.password,
          });

        const userId = UserData.get({ plain: true }).id;
        req.session.save(() => {
          req.session.loggedIn = true; 
          req.session.user_id = userId; 
          res.status(200).json(UserData);
        });
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
}
);