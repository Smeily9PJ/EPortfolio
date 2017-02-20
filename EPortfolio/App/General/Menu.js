function MenuController($scope, $state) {
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
    var Menu = {};
    Menu.Items = items;
    var index = 0;
    Menu.Change = function (index) {
        this.AfficherMenuSpecial = false;
        for (var i = 0; i < Menu.Items.length; i++) {
            if(i == index){
                Menu.Items[i].Active = true;
            } else {
                Menu.Items[i].Active = false;
            }
        }
    }

    Menu.Version = "0.1";
    Menu.IsBlack = true;
    Menu.StyleMain = "rgb(59, 59, 59)";
    Menu.StyleSecondary = "rgb(182, 103, 191)";
    Menu.StyleTexte = "rgb(255, 255, 255)";

    $scope.Menu = Menu;

    $scope.GoMatrice = function () { Menu.Change(-1); $state.go("matrice"); };
    $scope.GoContact = function () { Menu.Change(4); $state.go("contact"); };


    var goProjet = function (refSwitch, refProjet) { $state.go("Experience.detail", { refSwitch: refSwitch, refExperience: refProjet }); };
    $scope.GoProjetProfessionel = function (refProjet) { goProjet('P', refProjet); };
    $scope.GoProjetEtudiant = function (refProjet) { goProjet('E', refProjet); };

    var goCompetence = function (refSwitch, refCompetence) { $state.go("Competence.detail", { refSwitch: refSwitch, refCompetence: refCompetence }); };
    $scope.GoCompetenceTechnique = function (refCompetence) { goCompetence('T', refCompetence); };
    $scope.GoCompetenceHumaine = function (refCompetence) { goCompetence('H', refCompetence); };

    $scope.ChangeStyle = function () {
        Menu.IsBlack = !Menu.IsBlack;
        var element =  document.getElementById("variable-style");
        if (Menu.IsBlack) {
            //element.setAttribute("href", "App/Generate/Css/General/Variables.css");
        } else {
            //element.setAttribute("href", "App/Generate/Css/General/Variables2.css");
        }
    };
}
