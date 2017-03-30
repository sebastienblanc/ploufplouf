
angular.module('ploufplouf').controller('NewPloufController', function ($scope, $location, locationParser, flash, PloufResource ) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.plouf = $scope.plouf || {};
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            flash.setMessage({'type':'success','text':'The plouf was created successfully.'});
            $location.path('/Ploufs');
        };
        var errorCallback = function(response) {
            if(response && response.data) {
                flash.setMessage({'type': 'error', 'text': response.data.message || response.data}, true);
            } else {
                flash.setMessage({'type': 'error', 'text': 'Something broke. Retry, or cancel and start afresh.'}, true);
            }
        };
        PloufResource.save($scope.plouf, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/Ploufs");
    };
});