function MainController($scope, $state) {
    // Send an AJAX request
    var uri = 'api/main';

    //#region Maintenance
    $scope.Maintenance = "0";
    $.getJSON(uri + '/parametre', {code : "MAINTENANCE"})
         .done(function (data) {
             $scope.Maintenance = data;
         })
         .fail(function (jqxhr, textStatus, error) {
             $scope.Maintenance = "0";
         });
    //#endregion Maintenance

    //#region Version
    $scope.Version = "";
    $.getJSON(uri + '/version', {})
          .done(function (data) {
              $scope.Version = data;
          })
          .fail(function (jqxhr, textStatus, error) {
              $scope.Version = "";
          });
    //#endregion Version

    //#region Menu
    var Menu = {};

    var items = [
        {
            Name: "Accueil",
            Href: "home",
            Active: true
        },
        {
            Name: "Expériences",
            Href: "experience",
            Active: false
        },
        {
            Name: "Compétences",
            Href: "competence",
            Active: false
        },
        {
            Name: "Activités extra-pro",
            Href: "loisir",
            Active: false
        },
        {
            Name: "Contact",
            Href: "contact",
            Active: false
        }
    ];
    Menu.Items = items;

    var index = 0;
    Menu.Change = function (index) {
        this.AfficherMenuSpecial = false;
        for (var i = 0; i < Menu.Items.length; i++) {
            if (i == index) {
                Menu.Items[i].Active = true;
            } else {
                Menu.Items[i].Active = false;
            }
        }
    }

    $scope.Menu = Menu;
    //#endregion Menu

    //#region Redirections 
   
    // boutons fixes
    $scope.GoMatrice = function () { Menu.Change(-1); $state.go("matrice"); };
    $scope.GoContact = function () { Menu.Change(4); $state.go("contact"); };

    // projets
    var goProjet = function (refSwitch, refProjet) { $state.go("Experience.detail", { refSwitch: refSwitch, refExperience: refProjet }); };
    $scope.GoProjetProfessionel = function (refProjet) { goProjet('P', refProjet); };
    $scope.GoProjetEtudiant = function (refProjet) { goProjet('E', refProjet); };

    // compétences
    var goCompetence = function (refSwitch, refCompetence) { $state.go("Competence.detail", { refSwitch: refSwitch, refCompetence: refCompetence }); };
    $scope.GoCompetenceTechnique = function (refCompetence) { goCompetence('T', refCompetence); };
    $scope.GoCompetenceHumaine = function (refCompetence) { goCompetence('H', refCompetence); };

    //#endregion Redirections 

    /**************
         Style
    **************/
    /*$scope.IsBlack = true;
    $scope.StyleMain = "rgb(59, 59, 59)";
    $scope.StyleSecondary = "rgb(182, 103, 191)";
    $scope.StyleTexte = "rgb(255, 255, 255)";

    $scope.ChangeStyle = function () {
        $scope.IsBlack = !$scope.IsBlack;
        var element = document.getElementById("variable-style");
        if ($scope.IsBlack) {
            //element.setAttribute("href", "App/Generate/Css/General/Variables.css");
        } else {
            //element.setAttribute("href", "App/Generate/Css/General/Variables2.css");
        }
    };*/
}
