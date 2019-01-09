var express = require('express');
var router = express.Router();
const wolfController = require('../controllers').wolf;
const packController = require('../controllers').pack;
const wolfpackController = require('../controllers').wolfpack;


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/wolf', wolfController.list);
router.get('/api/wolf/:id', wolfController.getById);
router.post('/api/wolf', wolfController.add);
router.put('/api/wolf/:id', wolfController.update);
router.delete('/api/wolf/:id', wolfController.delete);


router.get('/api/pack', packController.list);
router.get('/api/pack/:id', packController.getById);
router.post('/api/pack', packController.add);
router.put('/api/pack/:id', packController.update);
router.delete('/api/pack/:id', packController.delete);

router.get('/api/wolfpack', wolfpackController.list);
router.get('/api/wolfpack/:id', wolfpackController.getById);
router.post('/api/wolfpack/:id', wolfpackController.add);


module.exports = router;
