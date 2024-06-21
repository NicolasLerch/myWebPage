const path = require('path')
const fs = require('fs')

const projectsPath = fs.readFileSync(path.join(__dirname, '../data/projects-en.json'), 'utf-8')
const projects = JSON.parse(projectsPath);
const skillPath = fs.readFileSync(path.join(__dirname, '../data/skills.json'), 'utf-8')
const skills = JSON.parse(skillPath)

const skillsEs = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/skillsEs.json'), 'utf-8'))
const projectsEs = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/projects-es.json'), 'utf-8'))


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
        res.download(path.join(__dirname, '../../public/Lerch_CV_en.pdf'))
    },

    thanks: function(req, res){
        res.render('contacted')
    },

    // rutas en español
    mainPageEs: function(req, res){
        res.render('es/index-es')
    },
    contactEs: function(req, res){
        res.render('es/contact-es')
    },
    skillsEs: function(req, res){
        res.render('es/skills-es', {skills: skillsEs})
    },
    projectsEs: function(req, res){
        res.render('es/projects-es', {projects: projectsEs})
    },
    projectDetailEs: function(req, res){
        let idExists = projectsEs.find(project => project.id == req.params.id);
        if(isNaN(req.params.id) || !idExists){
            return res.redirect('/404')
        }            
        const project = projectsEs.find(project => project.id == req.params.id)
        res.render('es/projectDetail-es', {project: project})
    },
    aboutEs: function(req, res){
        res.render('es/about-es')
    },
    downloadCVEs: function(req, res){
        res.download(path.join(__dirname, '../../public/Lerch_CV_es.pdf'))
    },
    thanksEs: function(req, res){
        res.render('es/contacted-es')
}}

module.exports = controller;