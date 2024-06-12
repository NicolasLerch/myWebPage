const controller = {
    mainPage: function(req, res){
        res.render('index')
    },
    projects: function (req, res){
        res.render('projects')
    },
    about: function (req, res){
        res.render('about')
    },
    contact: function (req, res){
        res.render('contact')
    },
    skills: function(req, res){
        res.render('skills')
    }
}

module.exports = controller;