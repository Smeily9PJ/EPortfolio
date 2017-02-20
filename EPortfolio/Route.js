function Route($stateProvider, $urlRouterProvider) {
    //Set default route
    $urlRouterProvider.otherwise('/');

    //Declare states
    $stateProvider
      .state('home', {
          url: '/',
          templateUrl: 'App/Home/home.html',
          controller: HomeController
      })
      .state('matrice', {
          url: '/matrice',
          templateUrl: 'App/Matrice/Matrice.html',
          controller: MatriceController
      })
      .state('Experience', {
          url: '/experience',
          templateUrl: 'App/Experience/Experience.html',
          controller: ExperienceController
      })
      .state('Experience.detail', {
          url: '#accordion{refSwitch}{refExperience}',
          templateUrl: 'App/Experience/Experience.html',
          controller: ExperienceController
      })
      .state('Competence', {
          url: '/competence',
          templateUrl: 'App/Competence/Competence.html',
          controller: CompetenceController
      })
      .state('Competence.detail', {
          url: '#accordion{refSwitch}{refCompetence}',
          templateUrl: 'App/Competence/Competence.html',
          controller: CompetenceController
      })
      .state('loisir', {
          url: '/loisir',
          templateUrl: 'App/Loisir/Loisir.html',
          controller: LoisirController
      })
      .state('contact', {
          url: '/contact',
          templateUrl: 'App/Contact/Contact.html',
          controller: ContactController
      });
}