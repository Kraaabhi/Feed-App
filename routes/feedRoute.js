const express = require('express');
const { getFeed } = require('../controllers/feedController');
const router = express.Router();

router.route("/").get(getFeed)


module.exports = router;