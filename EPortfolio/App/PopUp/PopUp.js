function PopUpController($scope, $state, title, description, apport) {
    $scope.Title = title;
    $scope.Description = description;
    $scope.Apport = apport;
    $scope.cancel = function () {
        // Appel à la fonction d'annulation.
        //$uibModalInstance.dismiss('cancel');
    };
}