const express = require('express');
const router = express.Router();

const newsController = require('./../src/controllers/news.controller');
const testController = require('./../src/controllers/test.controller');

router.get('/news', newsController.getNews);
router.get('/head-lines', newsController.getHeadlines);
router.get('/sources', newsController.getSources);
router.get('/sources-names', newsController.getSourcesName);

router.get('airbnb', testController.getAll);


router.post('/auth', function(req, res) {
  console.log('Auth: ', req.body);
  res.send('ok');
});

router.post('/auth2', function(req, res) {
  console.log('Auth2: ', req.body);
  res.send('ok');
});


module.exports = router;