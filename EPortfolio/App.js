

(function () {
    'use strict';

    // Init Angular
    var ang = angular.module('App', ['ui.router', 'ngAnimate', 'ngSanitize', 'ui.bootstrap', 'angularModalService']);

    ang.config(Route);
    ang.config(['$controllerProvider',
                  function ($controllerProvider) {
                      $controllerProvider.allowGlobals();
                  }
    ]);
    ang.controller('MainController', MainController);
    ang.controller('HomeController', HomeController);
    ang.controller('PopUpController', PopUpController);
    ang.controller('MatriceController', MatriceController);
    ang.controller('CompetenceController', CompetenceController);
    ang.controller('ExperienceController', ExperienceController);
    ang.controller('LoisirController', LoisirController);
    ang.controller('ContactController', ContactController);
})();