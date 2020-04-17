var express = require('express');
var router = express.Router();
const ona = require('../services/ona')

/* GET home page. */
router.get('/', function(req, res, next) {
  const data = ona.getForm();
  console.log(data);
  res.render('index', { title: 'AppInsight' });
});

module.exports = router;
