module.exports = function(app) {
    app.get('/', function(request, response, next) {
        response.send('<h1>Hello!</h1>')
    });
};