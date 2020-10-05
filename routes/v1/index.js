var express = require('express');

var router = express.Router();

/**
 * Returns API status
 * 
 * @route GET /
 * @group index - Validates and gives back API service status
 * @returns {object} 200 - {
 *  title: 'Express boilerplate',
 *  version: '1.0.0',
 *   description: 'description .....'
 * }
 * @returns {Error}  default - Unexpected error
 */
router.get('/', async function(req, res, next) {
  return res.json({
    title: 'Express boilerplate',
    version: '1.0.0',
    description: 'description .....'
  })
});

module.exports = router;
