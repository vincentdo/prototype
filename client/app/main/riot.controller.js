angular.module('prototypeApp')
  .controller('RiotController', ['$scope', '$http', function ($scope, $http) { 

    $http.get('/api/things/playerinfo').success(function(data) {      
        $scope.playerProfile = data;
        var prettyTime = moment(data.lastSeen).format('LLLL');
        $scope.playerProfile.lastSeen = prettyTime;
    });

  }]);
