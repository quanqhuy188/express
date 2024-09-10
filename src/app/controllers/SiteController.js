const Course = require('../models/Course');
class SiteController {
  //[GET] /news
  index(req, res) {
    Course.find({}, (err, courses) => {});
    res.json({ name: 'test' });
    //res.render('pages/home');
  }

  //[GET] detail /news:slug

  search(req, res) {
    res.render('pages/search');
  }
}
module.exports = new SiteController();
