function ExperienceController($scope, $state) {
    $scope.Menu.Change(1);
    var defaultProjet = $state.params.refExperience;
    var defaultSwitch = $state.params.refSwitch;
    var etatAccordeons = new Array();
    $scope.IsEtudiant = false;
    
    var goTo = function (nomPage) {
        if (etatAccordeons[nomPage] == true) {
            // Fermer accordeon
            $('#collapse' + nomPage).collapse('hide');
        } else {
            // Ouvrir accordeon
            $('#collapse' + nomPage).collapse('show');
        }

        etatAccordeons[nomPage] = !etatAccordeons[nomPage];
    };

    if (defaultSwitch != undefined && defaultSwitch != null) {

        if (defaultProjet != undefined && defaultProjet != null) {
            $scope.IsEtudiant = defaultSwitch == 'E';

            setTimeout(function () { goTo(defaultSwitch + defaultProjet); }, 1000);
        }
    }

    $scope.GoTo = goTo;
    $scope.EtatAccordeons = etatAccordeons;

}