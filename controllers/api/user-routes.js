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

// POSt route for logging in user
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { email: req.body.email } });

        if (!userData) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;//session variables
            req.session.logged_in = true;//session variables

            res.json({ user: userData, message: 'You are now logged in!' });
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// POST route for user logoit
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;
  