const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController').default

router.get('/', mainController.mainPage)
router.get('/projects', mainController.projects)
router.get('/about', mainController.about)
router.get('/contact', mainController.contact)
router.get('/skills', mainController.skills)
// router.get('/projects/detail', mainController.projectDetail)

module.exports = router;