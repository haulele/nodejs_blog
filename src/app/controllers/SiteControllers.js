class SiteControllers {
    // GET /trangtp
    trangtp(req, res) {
        res.render('trangtp');
    }

    // GET /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteControllers();
