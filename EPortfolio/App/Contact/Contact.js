function ContactController($scope) {
    $scope.Menu.Change(4);
    $scope.Corp = "";
    $scope.Nom = "";
    $scope.Mail = "";

    $scope.SendMail = function () {
        if ($scope.Nom == null || $scope.Nom == undefined || $scope.Nom == "") {
            alert("Vous devez renseigner un nom.");
        } else if ($scope.Mail == null || $scope.Mail == undefined || $scope.Mail == "") {
            alert("Vous devez renseigner un mail.");
        } else if ($scope.Corp == null || $scope.Corp == undefined || $scope.Corp == "") {
            alert("Vous devez renseigner un message dans le corps du mail.");
        } else {
            var uri = 'api/contact';

            $.getJSON(uri + '/sendMail', { name: $scope.Nom, from: $scope.Mail, content: $scope.Corp })
                  .done(function (data) {
                      alert("Envoi du mail effectué.");
                  })
                  .fail(function (jqxhr, textStatus, error) {
                      alert("Echec de l'envoi du mail");
                  });
        }
    }
}