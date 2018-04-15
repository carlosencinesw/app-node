module.exports = (app) => {
    app.get('/', (req, res) => {
        var conn = app.config.db();

        var contatoModel = app.app.models.contatoModel;

        contatoModel.getContatos(conn, (error, result) => {
            res.render('home/index', {
                contatos: result
            });
        });
    });
}