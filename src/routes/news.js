const express = require('express');
const NewsControllers = require('../app/controllers/NewsControllers');
const router = express.Router();

router.use('/news', NewsControllers.index); 
module.exports = router;