const express = require('express');
const router = express.Router();
const newsCtl = require('../app/controllers/NewsController');

router.get('/:slug', newsCtl.show);
router.get('/', newsCtl.index);

module.exports = router;
