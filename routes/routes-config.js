module.exports = (app) => {
    app.use('/api', require('./test'));
    app.use('/api', require('./home'));
}