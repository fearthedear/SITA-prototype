var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/student', function (req, res) {
  res.render('student', { page: 'Dashboard'});
});

router.get('/teacher', function (req, res) {
  res.render('teacher', { page: 'Dashboard'});
});

router.get('/performance', function (req, res) {
	res.render('performance', { page: 'Performance'});
});

router.get('/calendar', function (req, res) {
	res.render('calendar', { page: 'Calendar'});
})

module.exports = router;
