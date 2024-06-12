const path = require('path')
const fs = require('fs')

const projectsPath = fs.readFileSync(path.join(__dirname, '../data/projects.json'), 'utf-8')
const projects = JSON.parse(projectsPath);

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
    },
    projectDetail: function(req, res){
        const project = projects.find(project => project.id == req.params.id)
        res.render('projectDetail', {project: project})
        // res.send(projectsJSON)
    }
}

module.exports = controller;