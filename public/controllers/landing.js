app.controller('LandingController', function ($scope, Modal, $http) {
    $scope.getLocation = function (val) {
        return $http.get('//maps.googleapis.com/maps/api/geocode/json', {
            params: {
                address: val,
                sensor: false
            }
        }).then(function (response) {
            return response.data.results.map(function (item) {
                return item.formatted_address;
            });
        });
    }
});
app.controller('LandingController2', function ($scope, Modal) {
    $scope.show = function () {
        Modal.alert('alert', $scope.data)
    };
})