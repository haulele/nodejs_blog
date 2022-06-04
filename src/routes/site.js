const express = require('express');
const SiteControllers = require('../app/controllers/SiteControllers');
const router = express.Router();

router.use('/trangtp', SiteControllers.trangtp); 
router.use('/search', SiteControllers.search); 
module.exports = router;