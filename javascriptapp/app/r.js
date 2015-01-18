//Routes

var nhRoutes=angular.module("nhRoutes",[]);

nhRoutes.config(['$routeProvider',
  function($routeProvider) {
    
    $routeProvider.
      when('/home', {
        templateUrl: 'app/partials/front.html',
        controller: 'HomeCtrl'
      }).
      
      when('/portfolio', {
        templateUrl: 'app/partials/p-list.html',
        controller: 'PortfolioListCtrl'
      }).
      when('/portfolio/:pId', {
        templateUrl: 'app/partials/p-detail.html',
        controller: 'PortfolioDetailCtrl'
      }).
       when('/pdiary', {
        templateUrl: 'app/partials/p-diary.html',
        controller: 'PortfolioDiaryCtrl'
      }).
       when('/blog', {
        templateUrl: 'app/partials/b-home.html',
        controller: 'BlogCtrl'
      }).
       when('/resume', {
        templateUrl: 'app/partials/r-home.html',
        controller: 'ResumeCtrl'
      }).
      
      otherwise({
        redirectTo: '/home'
      });
  }]);
  