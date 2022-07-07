var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    myjson = {peticiones:[{001:'Peticion 1'},{002:'Peticion 2'}]};
    res.send(myjson)
});
module.exports = router;
