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
        when('/game-portfolio', {
            templateUrl: 'app/partials/pg-list.html',
            controller: 'GamePortfolioListCtrl'
        }).
      when('/game-portfolio/:pId', {
          templateUrl: 'app/partials/pg-detail.html',
          controller: 'GamePortfolioDetailCtrl'
      }).
       when('/pdiary', {
        templateUrl: 'app/partials/p-diary.html',
        controller: 'PortfolioDiaryCtrl'
      }).
       when('/blog', {
        templateUrl: 'app/partials/b-home.html',
        controller: 'BlogCtrl'
      }).
     when('/hack', {
        templateUrl: 'app/partials/h-home.html',
        controller: 'HackCtrl'
      }).
         when('/apps', {
        templateUrl: 'app/partials/a-home.html',
        controller: 'AppCtrl'
      }).
       when('/resume', {
        templateUrl: 'app/partials/r-home.html',
        controller: 'ResumeCtrl'
      }).
       when('/virtual-reality/:vrId', {
           templateUrl: 'app/partials/vr-item.html',
           controller: 'VirtualRealityItemCtrl'
       }).
         when('/virtual-reality', {
             templateUrl: 'app/partials/vr-home.html',
             controller: 'VirtualRealityCtrl'
         }).
      otherwise({
        redirectTo: '/home'
      });
  }]);
  