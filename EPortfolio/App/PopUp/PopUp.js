function PopUpController($scope) {

    $scope.close = function () {
        $scope.$parent.ModalService.close('no', 500); // close, but give 500ms for bootstrap to animate
    };

   /* $scope.Title = title;
    $scope.Description = description;
    $scope.Apport = apport;*/
    $scope.Description = "test";


}