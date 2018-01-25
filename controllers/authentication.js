const User = require('../models/user')

exports.signup = (request, response, next) => {
    const email = request.body.email;
    const password = request.body.password;

    User.findOne({email: email}, (err, existingUser) => {
        if(err) {
            return next(err);
        }
        if(existingUser) {
            return response.status(422).send({ error: 'Email already in use' })
        }

        const user = new User({
            email,
            password
        });

        user.save(err => {
            if(err) {
                return next(err);
            }

            response.json({
                success: true
            });
        });
    })
}