const express = require('express');
const CourseControllers = require('../app/controllers/CourseControllers');
const router = express.Router();


router.get('/create', CourseControllers.create);    
router.post('/store', CourseControllers.store);   
router.get('/:slug', CourseControllers.show);
module.exports = router;
