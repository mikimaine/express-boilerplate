var express = require('express');

var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  res.json({
    title: 'Express boilerplate',
    version: '1.0.0',
    description: 'description .....'
  })
});

module.exports = router;
