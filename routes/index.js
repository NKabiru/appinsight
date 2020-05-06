const express = require('express');
const router = express.Router();
const ona = require('../services/ona');

/* GET home page. */
router.get('/',  function(req, res, next) {
  res.render('index');
});

router.get('/aggregates',  async function(req, res, next) {
  const aggregates = await ona.aggregate();
  res.json(aggregates);
});

module.exports = router;
