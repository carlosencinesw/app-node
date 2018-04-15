module.exports = () => {
    this.getContatos = (connection, callback) => {
        connection.query('select * from contatos_agenda', callback);
    }
    return this;
}