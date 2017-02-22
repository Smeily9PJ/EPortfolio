function HomeController($scope, $state, $uibModal) {
    $scope.Menu.Change(0);
   /* $scope.Diplomes = null;
    var uri = 'api/skills';
    // Send an AJAX request
    $.post(uri + '/diplomes')
        .done(function (data) {
            $scope.Diplomes = data;
        });*/

    $scope.goFavoryProject = function () { $state.go("Experience.detail", { refSwitch: 'P', refExperience: 'TIME' }); };

    $scope.OpenModal = function () {
        $uibModal.open({
            animation: true,
            resolve: {
                title: function () {
                    return "test";
                },
                description: function () {
                    return "desc";
                },
                apport: function () {
                    return "apport";
                }
            },
            templateUrl: 'App/PopUp/PopUp.html',
            controller: 'PopUpController'
        });
    };
}

