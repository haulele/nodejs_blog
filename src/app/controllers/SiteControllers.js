const Course = require('../controllers/modals/Course');
const {multipleMongooseToObject} = require('../../util/mongoose');
class SiteControllers {
    // GET /trangtp
    trangtp(req, res, next) {
        // Course.find({}, function(err, courses){
        //     if(!err) res.json(courses);
        //     else res.status(400).json({error: 'ERROR!!!'});
        // });
        Course.find({})
            .then(courses => {
                res.render('trangtp', {
                    courses: multipleMongooseToObject(courses)
                });
            })
            .catch(next);
        // res.render('trangtp');
    }
    
    // GET /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteControllers();
