/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');

var API_KEY = '3c5b5455-2e4c-4a4d-87a4-9cc80da8ce27'; 
var lolapi = require('leagueapi');
var picUrl = 'http://ddragon.leagueoflegends.com/cdn/3.15.5/img/champion/';
lolapi.init(API_KEY, 'na');


var player = 'RFBlader';

var getPlayerInfo = function(req, res) {
  lolapi.Summoner.getByName(player, function(err, data){
    if (err) {
      console.log(err);
      res.send(err);
    }
    else {
      var playerId = data.rfblader.id;
      lolapi.getRecentGames(playerId, function(err, data){
        var playerData = {};
        playerData.id = playerId;
        playerData.name = player;
        playerData.lastSeen = new Date(Number(data[0].createDate));
        lolapi.Static.getChampionById(data[0].championId, null, 'na', function(err, data){
          if (data) {
            playerData.championName = data.name;
            playerData.championPicture = picUrl + data.name + '.png';
            res.send(playerData);
          }
        });
      });
    }
  })
}

exports.get_player_info = getPlayerInfo;