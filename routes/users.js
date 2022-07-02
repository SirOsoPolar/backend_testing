var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({Nombres:[{name:'John'},{name:'Jane'}]});
});
router.post('/', function(req, res, next) {
  res.send({Nombres:[{name:'delete'},{name:'undle'}]});
});
module.exports = router;
