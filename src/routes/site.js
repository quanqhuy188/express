const express = require('express');
const router = express.Router();
const siteCtl = require("../app/controllers/SiteController")


router.use('/search', siteCtl.search)
router.use('/', siteCtl.index)


module.exports = router;