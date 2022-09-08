var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.send('Hallo Dicky from Notes.js haha')
})
router.get('/env', function (req, res) {
    res.send(process.env.APP_NAME)
})

module.exports = router;