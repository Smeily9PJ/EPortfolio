

(function () {
    'use strict';

    // Init Angular
    angular.module('app', ['ui.router', 'ui.bootstrap','ngAnimate'])
    .config(['$controllerProvider',
                  function ($controllerProvider) {
                      $controllerProvider.allowGlobals();
                  }
    ])
    .config(Route)
    .controller('MenuController', MenuController)
    .controller('HomeController', HomeController)
    .controller('MatriceController', MatriceController)
    .controller('CompetenceController', CompetenceController)
    .controller('ExperienceController', ExperienceController)
    .controller('LoisirController', LoisirController)
    .controller('ContactController', ContactController)
    .controller('PopUpController', PopUpController);
})();