const express = require('express');
const SiteControllers = require('../app/controllers/SiteControllers');
const router = express.Router();

router.get('/trangtp', SiteControllers.trangtp);
router.get('/search', SiteControllers.search);
module.exports = router;
