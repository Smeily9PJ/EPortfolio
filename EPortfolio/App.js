

(function () {
    'use strict';

    // Init Angular
    angular.module('app', ['ui.router', 'ngAnimate', 'ngSanitize', 'ui.bootstrap', 'angularModalService'])
    .config(['$controllerProvider',
                  function ($controllerProvider) {
                      $controllerProvider.allowGlobals();
                  }
    ])
    .config(Route)
    .controller('MenuController', MenuController)
    .controller('HomeController', HomeController)
    .controller('PopUpController', PopUpController)
    .controller('MatriceController', MatriceController)
    .controller('CompetenceController', CompetenceController)
    .controller('ExperienceController', ExperienceController)
    .controller('LoisirController', LoisirController)
    .controller('ContactController', ContactController);
})();