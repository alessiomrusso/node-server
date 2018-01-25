const Auth = require('./controllers/authentication');

module.exports = app => {
    app.post('/signup', Auth.signup);
};