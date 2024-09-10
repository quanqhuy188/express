const Course = require('../models/Course');
class SiteController {
  //[GET] /news
  async index(req, res, next) {
    try {
      const courses = await Course.find({});
      //res.json(courses);
      res.render('pages/home', {
        courses,
      });
    } catch (err) {
      next(err);
    }
  }

  //[GET] detail /news:slug

  search(req, res) {
    res.render('pages/search');
  }
}
module.exports = new SiteController();
