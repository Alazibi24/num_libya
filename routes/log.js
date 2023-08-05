var express = require('express');
const logcont =require('../controller/cont');
var router = express.Router();


router.post('/index', logcont.register) 
module.exports = router;