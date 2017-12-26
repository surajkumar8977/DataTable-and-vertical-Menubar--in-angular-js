// Angular SPA Application

var mainApp = angular.module('mainApp',['ui.router','ui.bootstrap','ui.utils','datatables','ngMaterial', 'ngMessages', 'material.svgAssetsCache']);


mainApp.config(function ($stateProvider, $urlRouterProvider){
    $stateProvider.state("home", {
        url: "/home",
        templateUrl:"pages/home.html",
        controller: "homeController"
      })   
        .state('home.template', {
            url: '/template',
            templateUrl: "pages/template.html",
            controller: 'templateController'
        })
    .state('home.noData', {
            url: '/noData',
            templateUrl: "pages/noData.html",
            controller: 'noDataController'
        });
     $urlRouterProvider.otherwise('/home/template');
});

mainApp.directive('sideMenu', function() 
{	
	return {
		restrict: "E",
		templateUrl : 'pages/sideMenuBar.html',
		controller: 'sideMenuBar'
	}
});