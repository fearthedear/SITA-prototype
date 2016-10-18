var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SITA prototype' });
});

router.get('/student', function (req, res) {
  res.render('student');
});

router.get('/teacher', function (req, res) {
  res.render('teacher');
});

module.exports = router;
