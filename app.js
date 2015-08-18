var app = angular.module('TwitterApp', []);

app.controller('HandleController', function($scope,HandleFactory){
    $scope.Handle=HandleFactory;
    $scope.IsHidden = true;
    $scope.ShowHide = function (){
        $scope.IsHidden = $scope.IsHidden ? false : true;
    }

});

//app.factory('RandomNumber', function(){
//    var randomNum = Math.floor((Math.random()*10));
//    return randomNum;
//
//});

app.factory('AdjService', function(){
    var adj = ['slimy', 'delicious', 'empty', 'jolly', 'spicy', 'wide-eyed', 'blue', 'gigantic', 'random', 'yummy' ];
    return adj;
});

app.factory('NounService', function(){
    var noun = ['salamander', 'rainbows', 'jellybeans', 'cement', 'glitter', 'dolls', 'kitty', 'bunny', 'toilet', 'bonbons'];
    return noun
});

app.factory('ShuffleFactory', function(AdjService, NounService){
    var shuffle =function(array) {
        var m = array.length, t, i;

        // While there remain elements to shuffle…
        while (m) {

            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);

            // And swap it with the current element.
            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }

        return array;
    }
    return shuffle;

});

app.factory('HandleFactory', function( AdjService,NounService,   ShuffleFactory){
    ShuffleFactory(AdjService);
    ShuffleFactory(NounService);

    var handleList = [];
    for (var i=0;i<10;i++) {
        handleList.push(AdjService[i] + NounService [i]);
    };
    return handleList;
});