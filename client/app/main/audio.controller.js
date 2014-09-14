angular.module('prototypeApp')
  .controller('AudioController', function ($scope) {
  	$scope.playlist = 
  	[
  		{src: 'assets/audio/Statue.ogg', 
  		 type: 'audio/ogg',
  		 title: 'Statue' },
  		{src: 'assets/audio/StayJustALittle.ogg',
  	   type: 'audio/ogg',
  	   title: 'Stay Just A Little'}
  	];

  	$scope.currentTrack = $scope.playlist[0];

  });
