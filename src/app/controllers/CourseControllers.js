const Course = require('../controllers/modals/Course');
const {mongooseToObject} = require('../../util/mongoose');
const { response } = require('express');

class CourseControllers {
    // show slug db
    show(req, res, next) {
        Course.findOne({slug: req.params.slug})
            .then(course =>
                res.render('courses/show',{course: mongooseToObject(course)})
            )
            .catch(next);
    }
    //// create new courses (GET)
    create(req, res, next) {
        res.render('courses/create');
    }
    //// create new coures (POST)
    store(req, res, next) {
        const course = new Course(req.body);
        course.save()
            .then(() => res.redirect('/trangtp'))
            .catch(error => {});
        // res.json(req.body);
    }
    // show(req, res) {
    //     res.send('Course detail:' + req.params.slug);
    // }
}

module.exports = new CourseControllers();
