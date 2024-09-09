class SiteController {
    //[GET] /news
    index(req,res) {
        res.render('pages/home')
    }

    //[GET] detail /news:slug

    search(req,res) {
        res.render('pages/search')
    }

 }
module.exports = new SiteController