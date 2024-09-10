const express = require('express');
const router = express.Router();
const siteCtl = require('../app/controllers/SiteController');

router.get('/search', siteCtl.search);
router.get('/', siteCtl.index);

module.exports = router;
