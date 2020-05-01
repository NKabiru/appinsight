const express = require('express');
const router = express.Router();
const ona = require('../services/ona');

/* GET home page. */
router.get('/',  async function(req, res, next) {
  console.log(await ona.aggregate())
  res.render('index', { title: 'AppInsight' });
});

module.exports = router;
