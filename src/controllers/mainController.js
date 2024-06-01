const controller = {
    mainPage: function(req, res){
        res.render('index')
    },
    projects: function (req, res){
        res.render('projects')
    },
    about: function (req, res){
        res.render('about')
    }
}

module.exports = controller;