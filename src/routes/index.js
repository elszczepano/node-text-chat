import express from 'express';
const router = express.Router();

const PagesController = require('../controllers/PagesController');
const ApplicationsController = require('../controllers/ApplicationsController');

router.get('/', PagesController.home);
router.get('/chatroom', PagesController.chatroom);

router.post('/chatroom',
    ApplicationsController.ifDataExists,
    ApplicationsController.store
);

module.exports = router;