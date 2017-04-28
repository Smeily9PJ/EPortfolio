function HomeController($scope, $state, ModalService) {
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
       /* $uibModal.open({
            animation: true,
            transclude: false,
            resolve: {
               /* $scope: $scope,
                title:  "test",
                description:  "desc",
                apport:  "apport" 
            },
            templateUrl: 'App/PopUp/PopUp.html',
            controller: 'PopUpController'
        });*/
        ModalService.showModal({
            templateUrl: 'App/PopUp/PopUp.html',
            controller: "PopUpController"
        }).then(function(modal) {
            modal.element.modal();
            modal.close.then(function(result) {
                //$scope.message = "You said " + result;
            });
        });
    };
}

