var express = require('express');
var router = express.Router();
const ROOT_URL = 'https://catfact.ninja'

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/cats/fact', async function(req, res, next) {
  const catData = await fetch(`${ROOT_URL}/fact`)
  .then(res => res.json())
  res.render('cat/fact', { title: 'Express', catData });

});

module.exports = router;
