var app = require('./config/server');
//var home = require('./app/routes/home')(app);

app.listen(8080, () => {
    console.log('Servidor Online');
});