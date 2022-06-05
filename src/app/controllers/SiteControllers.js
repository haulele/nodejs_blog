const Course = require('../controllers/modals/Course');

class SiteControllers {
    // GET /trangtp
    trangtp(req, res) {
        Course.find({}, function(err, courses){
            if(!err) res.json(courses);
            else res.status(400).json({error: 'ERROR!!!'});
        });

        // res.render('trangtp');
    }

    // GET /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteControllers();
