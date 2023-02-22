const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

router.get('/:slag', siteController.search);
router.get('/', siteController.index);
router.post('/', siteController.create);

module.exports = router;


