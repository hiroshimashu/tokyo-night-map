const keys = require('../config/keys');
const passport = require('passport');
const mongoose = require('mongoose');
const InstagramStrategy = require('passport-instagram');

const User = mongoose.model('user');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
      .then(user => {
        done(null, user);
      })
});

passport.use(new InstagramStrategy({
    clientID: INSTAGRAM_CLIENT_ID,
    clientSecret: INSTAGRAM_CLIENT_SECRET,
    callbackURL: "http://127.0.0.1:3000/auth/instagram/callback"
  },
  async (accessToken, refreshToken, profile, done) => {
    const existingUser = await User.findOne({ instagramId: profile.id })
      if(existingUser) {
        done(null, existingUser);
      } else {
         const user = await new User({ instagramId: profile.id }).save();
         done(null, user);
      }
  }
));