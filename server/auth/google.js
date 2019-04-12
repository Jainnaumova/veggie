const passport = require('passport')
const router = require('express').Router()
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
const {User} = require('../db/models')
module.exports = router

/**
 * For OAuth keys and other secrets, your Node process will search
 * process.env to find environment variables. On your production server,
 * you will be able to set these environment variables with the appropriate
 * values. In development, a good practice is to keep a separate file with
 * these secrets that you only share with your team - it should NOT be tracked
 * by git! In this case, you may use a file called `secrets.js`, which will
 * set these environment variables like so:
 **/
console.log(process.env.GOOGLE_CLIENT_ID);
 process.env.GOOGLE_CLIENT_ID = '572751984871-6qem9fttsfajg87nmundla0qoarsejau'
 process.env.GOOGLE_CLIENT_SECRET = 't4-_dzeUn2FiNC7Fb7_yoPd-'
 process.env.GOOGLE_CALLBACK = '/auth/google/callback'

 // clientID: process.env.GOOGLE_CLIENT_ID,
 // clientSecret: process.env.GOOGLE_CLIENT_SECRET,
 // callbackURL: process.env.GOOGLE_CALLBACK


//clientID: 572751984871-6qem9fttsfajg87nmundla0qoarsejau.apps.googleusercontent.com
// clientSecret: t4-_dzeUn2FiNC7Fb7_yoPd-

if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
  console.log('Google client ID / secret not found. Skipping Google OAuth.')
} else {
  const googleConfig = {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  }
  const strategy = new GoogleStrategy(
    googleConfig,
    (token, refreshToken, profile, done) => {
      console.log('---', 'in verification callback', profile, '---')
      const googleId = profile.id
      const name = profile.displayName
      const email = profile.emails[0].value

      User.findOrCreate({
        where: {googleId},
        defaults: {name, email}
      })
        .then(([user]) => done(null, user))
        .catch(done)
    }
  )

  passport.use(strategy)

  router.get('/', passport.authenticate('google', {scope: 'email'}))

  router.get(
    '/callback',
    passport.authenticate('google', {
      successRedirect: '/home',
      failureRedirect: '/login'
    })
  )

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findByPk(id)
      .then(user => {
        done(null, user);
      })
      .catch(err => {
        done(err);
      });
  });
}
