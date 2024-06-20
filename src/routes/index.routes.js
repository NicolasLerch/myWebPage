const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController')

router.get('/', mainController.mainPage)
router.get('/projects', mainController.projects)
router.get('/about', mainController.about)
router.get('/contact', mainController.contact)
router.get('/skills', mainController.skills)
router.get('/projects/:id', mainController.projectDetail)
router.get('/cv/download', mainController.downloadCV)
// router.get('/404', mainController.notFound)


// rutas en español
router.get('/es', mainController.mainPageEs)
router.get('/es/contacto', mainController.contactEs)
router.get('/es/habilidades', mainController.skillsEs)
router.get('/es/proyectos', mainController.projectsEs)
router.get('/es/proyectos/:id', mainController.projectDetailEs)
router.get('/es/sobremi', mainController.aboutEs)
router.get('/es/cv/download', mainController.downloadCVEs)
module.exports = router;