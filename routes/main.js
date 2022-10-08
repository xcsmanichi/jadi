__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__path + '/views/home.html')
})

router.get('/home', (req, res) => {
    res.sendFile(__path + '/views/index.html')
})

router.get('/apis', (req, res) => {
    res.sendFile(__path + '/views/apis.html')
})

router.get('/facebook', (req, res) => {
    res.sendFile(__path + '/views/facebook.html')
})

router.get('/instagram', (req, res) => {
    res.sendFile(__path + '/views/instagram.html')
})

router.get('/twitter', (req, res) => {
    res.sendFile(__path + '/views/twitter.html')
})

router.get('/tik-tok', (req, res) => {
    res.sendFile(__path + '/views/tiktok.html')
})

module.exports = router
