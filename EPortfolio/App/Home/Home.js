function HomeController($scope, $state) {
    $scope.Menu.Change(0);
    $scope.Diplomes = null;
    var uri = 'api/skills';
    // Send an AJAX request
    $.post(uri + '/diplomes')
        .done(function (data) {
            $scope.Diplomes = data;
        });

    $scope.goFavoryProject = function () { $state.go("Experience.detail", { refSwitch: 'P', refExperience: 'TIME' }); };
}