const newsRouter = require('./news');
const siteRouter = require('./site');
const courseRouter = require('./course');

function route(app) {
    app.use('/', newsRouter);
    // app.get('/news', (req, res) => {
    //     res.render('news');
    //   })
    app.use('/', siteRouter);
    // app.post('/search', (req, res) => {
    //     console.log(req.body);
    //     res.send('');
    // })
    app.use('/course', courseRouter);
}

module.exports = route;
