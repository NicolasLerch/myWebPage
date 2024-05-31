const controller = {
    mainPage: function(req, res){
        res.render('index')
    },
    projects: function (req, res){
        res.render('projects')
    }
}

module.exports = controller;