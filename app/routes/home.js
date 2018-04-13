module.exports = (app) => {
    app.get('/', (req, res) => {
        var conn = app.config.db();
        conn.query('select * from contatos_agenda', (error, result) => {
            res.render('home/index', {
                contatos: result
            });
        });
    });
}