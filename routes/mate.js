var express = require('express');
var router = express.Router();
const {seno,coseno,tan} = require('../controllers/trgn.controller');
const {nprimos} = require('../controllers/primo.controller');
router.get('/sin/:id', seno);
router.get('/cos/:id', coseno);
router.get('/tan/:id', tan);
router.get('/primo/', nprimos);

module.exports = router;

 