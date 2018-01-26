const Auth = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', {
    session: false
})

const requireSignin = passport.authenticate('local', {
    session: false
})

module.exports = app => {
    app.get('/', requireAuth, function(req, res){
        res.send('<div>Hi there!</div>')
    })
    app.post('/signup', Auth.signup);
    app.post('/signin', requireSignin, Auth.signin);
};