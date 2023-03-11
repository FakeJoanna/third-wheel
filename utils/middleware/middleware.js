const isLoggedIn = (req, res, next) => {
    if (!req.session.currentUser) {
      return res.status(401).json('Status: unauthorized');
      //return res.redirect("/")
    }
    next();
  };

  const isLoggedOut = (req, res, next) => {
    if (req.session.currentUser) {
      return res.redirect('/');
    }
    next();
  };
   

  module.exports = { isLoggedIn, IsLoggedOut }