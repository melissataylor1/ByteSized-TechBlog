const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use(homeRoutes)
router.use('/api', apiRoutes)


router.get("/session", (req, res) => {
    res.json(req.session)
  })

module.exports = router;