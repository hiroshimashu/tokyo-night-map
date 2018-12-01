const keys = require('../config/keys');
const passport = require('passport');
const mongoose = require('mongoose');
const InstagramStrategy = require('passport-instagram');

const User = mongoose.model('user');

passport.serializeUser((user, done) => {
  done(null, user.id);
})

passport.use(new InstagramStrategy({
    clientID: INSTAGRAM_CLIENT_ID,
    clientSecret: INSTAGRAM_CLIENT_SECRET,
    callbackURL: "http://127.0.0.1:3000/auth/instagram/callback"
  },
  (accessToken, refreshToken, profile, done) => {
    User.findOne({ instagramId: profile.id }).then(existingUser => {
      if(existingUser) {
        done(null, existingUser);
      } else {
        new User({ instagramId: profile.id })
            .save()
            .then(user => done(null, user));
      }
    })
  }
));