const path = require('path')
const fs = require('fs')

const projectsPath = fs.readFileSync(path.join(__dirname, '../data/projects-en.json'), 'utf-8')
const projects = JSON.parse(projectsPath);
const skillPath = fs.readFileSync(path.join(__dirname, '../data/skills.json'), 'utf-8')
const skills = JSON.parse(skillPath)

const controller = {
    mainPage: function(req, res){
        res.render('index')
    },
    projects: function (req, res){
        res.render('projects', {projects})
    },
    about: function (req, res){
        res.render('about')
    },
    contact: function (req, res){
        res.render('contact')
    },
    skills: function(req, res){
        res.render('skills', {skills})
    },
    projectDetail: function(req, res){
        let idExists = projects.find(project => project.id == req.params.id);
        if(isNaN(req.params.id) || !idExists){
            return res.redirect('/404')
        }            
        const project = projects.find(project => project.id == req.params.id)
        res.render('projectDetail', {project: project})
            
    },
    downloadCV: function(req, res){
        res.download(path.join(__dirname, '../../public/LerchNicolas_CV.pdf'))
    }
}

module.exports = controller;