const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const skinController = require('../controllers/skinControllers.js')


router.get('/', skinController.mainrender);

router.get('/add', skinController.add);

router.post('/save', skinController.save);

router.get('/edit/:userId', skinController.edit);

router.post('/update', skinController.updateSkin);

router.get('/delete/:userId', skinController.delete);

router.get('/get/:userId', skinController.get);

module.exports = router;