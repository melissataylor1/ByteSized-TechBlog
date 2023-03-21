const router = require('express').Router();
const { User, Blog, Comment } = require('../../models')

//GET all users
router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll({
          include: [Blog]
        })
    
        res.status(200).json(userData)
      } catch (err) {
        res.status(500).json(err)
      }
    })

//GET single user
router.get('/:id', (req, res) => {
    User.findbyPk(req.params.id, {
        include: [Blog]
    }).then(user => {
        const userHbsData = user.get({ plain: true });
        console.log(user);
        console.log("==============")
        console.log(userHbsData)
        res.render("user", userHbsData)
      })
})
router.get('/search/:username', (req, res) => {
    User.findOne({
      where: { username: req.params.username },
      include: [Blog]
    }).then(user => {
      const userNameHbsData = user.get({ plain: true });
      console.log(user);
      console.log("==============")
      console.log(userNameHbsData)
      res.render("user", userNameHbsData)
    })
  })
/*
//UPDATE user
router.put('/:id', withAuth, (req, res) => {
    User.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
    .then(userData => {
        if (!userData[0]) {
            res.status(404).json({ message: 'Can not find user with this id'});
            return;
        }
        res.json(userData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});*/

//CREATE user
router.post('/', async (req, res) => {
    try {
      const userData = await User.create(req.body);
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.loggedIn = true;
  
        res.status(200).json(userData);
      });
    } catch (err) {
      res.status(400).json(err);
    }
  });

//LOGIN user
router.post('/login', async (req, res) => {
    try {
        const dbUserData = await User.findOne({ where: { username: req.body.username } })
    
        if (!dbUserData) {
          res.status(400).json({ message: 'Invalid username or password.' })
          return;
        }
    
        const validPassword = await dbUserData.checkPassword(req.body.password)
    
        if (!validPassword) {
          res.status(400).json({ message: 'Invalid username or password.' })
          return;
        }
     
        req.session.save(() => {
            req.session.user_id = dbUserData.id
            req.session.loggedIn = true;
            req.session.cookie
            res.status(200).json({ user: userData, message: 'Logged In' });

        })
    } catch (err) {
        res.status(400).json(err)
      }
})

//LOGOUT user
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

//DELETE user
router.delete('/:id', (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(userData => {
        if (!userData) {
            res.status(404).json({ message: 'No user found' })
            return;
        }
        res.json(userData);
    })
    .catch(err => {
        res.status(500).json(err);
        console.log(err);
    });
});

module.exports = router;