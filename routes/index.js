var express = require('express');
var router = express.Router();
const axios = require('axios')

/* GET home page. */
router.get('/', function(req, res, next) {
  axios.defaults.baseURL = process.env.ONA_API_HOST;
  axios.defaults.headers.common['Authorization'] = `Token ${process.env.ONA_API_KEY}`;

  axios.get('user').then(response => {
    console.log(response)
    res.render('index', { title: 'AppInsight' });
  }).catch(error => {
    console.log(error)
    res.render('index', { title: 'AppInsight' });
  })
});

module.exports = router;
