function MatriceController($scope, $state) {
    var projets = [{
        Nom: "TIME",
        Lien: "TIME",
        Type : 'P'
    }, {
        Nom: "Contrat d'engagement",
        Lien: "ContratEngagement",
        Type: 'P'
    }, {
        Nom: "Vue Frais",
        Lien: "VueFrais",
        Type: 'P'
    }, {
    //    Nom: "TRAVAUX",
    //    Lien: "TRAVAUX",
    //    Type: 'P'
    //}, {
    //    Nom: "MGM",
    //    Lien: "MGM",
    //    Type: 'P'
    //}, {
    //    Nom: "EVERSUITE",
    //    Lien: "EVERSUITE",
    //    Type: 'P'
    //},  {
    //    Nom: "Gestion des tags",
    //    Lien: "GestionTags",
    //    Type: 'P'
    //}, {
        Nom: "TED X",
        Lien: "TEDX",
        Type: 'E'
    }, {
        //Nom: "Gestion d'entreprise",
        //Lien: "GestionEntreprise",
        //Type: 'E'
    //}, {
        Nom: "Poussons ensemble",
        Lien: "PoussonsEnsemble",
        Type: 'E'
    }, {
    //    Nom: "Meeting Tracker",
    //    Lien: "MeetingTracker",
    //    Type: 'E'
    //}, {
    //    Nom: "Check your SMILE",
    //    Lien: "CheckYourSMILE",
    //    Type: 'E'
    }
    ];

    var competencesHumaines = [{
        Nom: "Adaptabilité",
        Lien: "Adaptabilite"
    }, {
        Nom: "Autonomie",
        Lien: "Autonomie"
    }, {
        Nom: "Curiosité",
        Lien: "Curiosite"
    //}, {
    //    Nom: "Patience",
    //    Lien: "Patience"
    }, {
        Nom: "Sérieux",
        Lien: "Serieux"
    }, {
        Nom: "Sociabilité",
        Lien: "Sociabilite"
    }
    ];

    var competencesTechniques = [{
        Nom: "AngularJS",
        Lien: "AngularJS"
    }, {
        Nom: "Architecture",
        Lien: "Archi"
    }, {
        Nom: "Base de données",
        Lien: "BDD"
    }, {
    //    Nom: "Chiffrage",
    //    Lien: "Chiffrage"
    //}, {
        Nom: "C#",
        Lien: "CSharp"
    }, {
        Nom: "CSS SASS",
        Lien: "CSS"
    }, {
    //    Nom: "Documentation",
    //    Lien: "Documentation"
    //}, {
        Nom: "HTML",
        Lien: "HTML"
    }, {
        Nom: "Type/JavaScript",
        Lien: "JsTs"
    }, {
        Nom: "Recherche",
        Lien: "RD"
    }, {
        Nom: "Web Api",
        Lien: "WebApi"
    }
    //    Nom: "Log4Net",
    //    Lien: "Log4Net"
    //}, {
    //    Nom: "Méthodes AGILE",
    //    Lien: "MethodesAGILE"
    //}, {
    //    Nom: "Plan de tests",
    //    Lien: "PlanDeTests"
    //}, {
    ];
    var contenu = [
        // TIME COTNRAT VF      TED ENS
        [1, 1, 1, /*1, 1, 0, 1,*/ 1, 1/*, 0, 0, 0*/],//adaptabilite
        [1, 1, 1, /*1, 1, 1, 1,*/ 1, 1/*, 1, 0, 0*/],//autonomie
        [1, 1, 1, /*1, 1, 0, 1,*/ 1, 1/*, 1, 1, 1*/],//curiosite
      //[0, 0, 0, /*0, 0, 0, 1,*/ 1, 1/*, 0, 1, 1*/],//patience
        [1, 1, 1, /*1, 1, 1, 1,*/ 1, 1/*, 1, 1, 1*/],//sérieux
        [1, 1, 1, /*1, 1, 1, 1,*/ 1, 1/*, 0, 0, 0*/],//sociabilité
        [1, 1, 1, /*0, 0, 0, 1,*/ 0, 0/*, 0, 0, 0*/],//angularJS
        [1, 1, 1, /*1, 1, 0, 1,*/ 0, 0/*, 0, 1, 1*/],//archi
        [1, 1, 1, /*1, 1, 0, 1,*/ 0, 0/*, 0, 1, 1*/],//bdd
      //[1, 1, 1, /*1, 1, 0, 1,*/ 1, 1/*, 0, 0, 0*/],//chiffrage
        [1, 1, 1, /*1, 1, 0, 1,*/ 0, 0/*, 0, 0, 0*/],//csharp
        [1, 1, 1, /*0, 0, 0, 1,*/ 0, 0/*, 0, 1, 1*/],//css
      //[1, 1, 1, /*1, 1, 1, 1,*/ 1, 1/*, 1, 1, 1*/],//doc
        [1, 1, 1, /*0, 0, 0, 1,*/ 0, 0/*, 0, 1, 1*/],//html
        [1, 1, 1, /*0, 0, 0, 1,*/ 0, 0/*, 0, 1, 1*/],//js
      //[1, 1, 1, /*1, 1, 0, 1,*/ 1, 1/*, 0, 0, 0*/],//log4net
      //[0, 0, 0, /*0, 0, 0, 1,*/ 1, 1/*, 0, 1, 0*/],//agile
        //[1, 1, 1, /*1, 1, 1, 1,*/ 1, 1/*, 0, 1, 1*/],//tests
        [1, 1, 1, /*0, 0, 0, 1,*/ 0, 0/*, 0, 0, 0*/],//R&D
        [1, 1, 1, /*0, 0, 0, 1,*/ 0, 0/*, 0, 0, 0*/]//webapi
    ];

    $scope.Projets = projets;
    $scope.CompetencesHumaines = competencesHumaines;
    $scope.CompetencesTechniques = competencesTechniques;
    $scope.Contenu = contenu;
    $scope.GoCompetence = function (type, refCompetence) { $state.go("Competence.detail", { refSwitch: type, refCompetence: refCompetence }); };
    $scope.GoProjet = function (type, refProjet) { $state.go("Experience.detail", { refSwitch: type, refExperience: refProjet }); };
}