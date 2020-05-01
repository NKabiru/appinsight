const express = require('express');
const router = express.Router();
const ona = require('../services/ona');

/* GET home page. */
router.get('/',  async function(req, res, next) {
  const aggregates = await ona.aggregate()
  res.render('index', { title: 'AppInsight' , aggregates});
});

module.exports = router;
