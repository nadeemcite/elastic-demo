const app = angular.module('pnapp', ['ui.router', 'ngMessages', 'ui.bootstrap']);
app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider.state({
        name: 'anonymous',
        templateUrl: 'views/anonymous.html'
    });
    $stateProvider.state({
        name: 'anonymous.landing',
        url: '/',
        templateUrl: 'views/landing/landing.html',
        controller: 'LandingController'
    });
    $stateProvider.state({
        name: 'anonymous2',
        url: '/home',
        templateUrl: 'views/landing/landing2.html',
        controller: 'LandingController2'
    });
    $urlRouterProvider.otherwise("/");
    $locationProvider.html5Mode(true);
});
app.run(function ($rootScope, $transitions, Modal) {
    $transitions.onStart({}, function () {
        Modal.loader.show();
    });
    $transitions.onFinish({}, function () {
        Modal.loader.hide();
    });
    Modal.loader.hide();
});