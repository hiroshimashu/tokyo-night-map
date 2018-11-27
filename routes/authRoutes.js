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
      
};