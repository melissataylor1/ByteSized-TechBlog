const withAuth = (req, res, next) => {
    // user to login page if not already logged in
    if (!req.session.loggedIn) {
      res.redirect('/login');
      // user already logged in, proceed to home panel
    } else {
      next();
    }
  };
  
  module.exports = withAuth;
  