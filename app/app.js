'use strict';
    angular.module('webApp', [
        'ui.router',
        'ngAnimate',
        'ngSanitize',
        'pascalprecht.translate'
    ])
    .config(['$urlRouterProvider', '$locationProvider', '$translateProvider' ,'$stateProvider', '$httpProvider', function($urlRouterProvider, $locationProvider, $translateProvider, $stateProvider, $httpProvider) {
        $urlRouterProvider
          .otherwise('/en/');

        $stateProvider.state('app', {
            abstract: true,
            url: '/{lang:(?:pl|en)}',
            template: '<ui-view/>'
        });

        //$locationProvider.html5Mode(true);


        var en = {
            SHOPS_LABEL: "shops",
            MAP_LABEL: "map",
            SEARCH_LABEL: "where is",
        };

        var pl = {
            SHOPS_LABEL: "sklepy",
            MAP_LABEL: "mapa",
            SEARCH_LABEL: "gdzie jest"
        };

        $translateProvider.translations('en', en);
        $translateProvider.translations('pl', pl);
        ;
        // Enable escaping of HTML
        $translateProvider.useSanitizeValueStrategy('sanitize');

        $httpProvider.defaults.cache = true;
        $httpProvider.defaults.withCredentials = true;
    }])
    .run(function($rootScope, $stateParams, $location, $translate) {

        $rootScope.currentState = 'app.home';
        $translate.use('en');

        $rootScope.$on('$stateChangeSuccess', function rootStateChangeSuccess(event, toState, fromState){
            if($stateParams.lang !== undefined){
                $rootScope.activeLang = $stateParams.lang;
                $rootScope.currentState = toState.name;
                $rootScope.previousState = fromState.name;
                $translate.use($stateParams.lang);
            }
        });
       console.log('running angular ' + angular.version.full );


    })


// to move
    angular.module('webApp')
    .directive("uiSrefParams", function($state) {
    return {
        link: function(scope, elm, attrs) {
            var params;
            params = scope.$eval(attrs.uiSrefParams);
            return elm.bind("click", function(e) {
                var button;
                if (!angular.equals($state.params, params)) {
                    button = e.which || e.button;
                    if ((button === 0 || button === 1) && !e.ctrlKey && !e.metaKey && !e.shiftKey) {
                        scope.$evalAsync(function() {
                            return $state.go(".", params);
                        });
                        return e.preventDefault();
                    }
                }
            });
        }
    };
});