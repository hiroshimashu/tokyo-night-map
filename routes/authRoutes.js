const passport = require('passport');

// Authentication flow  part
module.exports = () => {
    app.get(
        '/auth/instagram',
        passport.authenticate('instagram', {
          scope:['profile', 'email']
        })
      );
      
    app.get('/auth/instagram/callback', passport.authenticate('instagram'));

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });

    app.get('/api/logout', (req, res) => {
      req.logout();
      req.send(req.user);
    });
};