class NewsController {
  //[GET] /news
  index(req, res) {
    res.render('pages/news');
  }

  //[GET] detail /news:slug

  show(req, res) {
    res.send('HIIII');
  }
}
module.exports = new NewsController();
