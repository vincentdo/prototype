'use strict';

var express = require('express');
var controller = require('./thing.controller');

var router = express.Router();

router.get('/playerinfo', controller.get_player_info);
// router.get('/player', controller.get_player_info);

module.exports = router;