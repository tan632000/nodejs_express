class NewsController {
    index(req, res) {
        res.render('news');
    }
    show(req, res) {
        res.render('newsDetail')
    }
}

module.exports = new NewsController;