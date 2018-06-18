const express = require('express');
const router = express.Router();

const PagesController = require('../controllers/PagesController');
const ApplicationsController = require('../controllers/ApplicationsController');

router.get('/', PagesController.home);
router.get('/chatroom', PagesController.chatroom);

router.post('/chatroom', ApplicationsController.store);

module.exports = router;