const express = require('express');
const router = express.Router();
const newsCtl = require('../app/controllers/NewsController');

router.use('/:slug', newsCtl.show);
router.use('/', newsCtl.index);

    module.exports = router;
