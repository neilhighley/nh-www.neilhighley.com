// Controllers
var nhControllers = angular.module('nhControllers', []);

nhControllers.controller("PortfolioDetailCtrl", ['$scope', '$routeParams', '$location', function ($scope, $routeParams, $location) {
    $scope.portfolioitem = new PortfolioItem();

    $scope.portfolioitem.id = $routeParams.pId;
    $scope.portfolioitem.name = "My name";
    $scope.portfolioitem.description = "My stuff";

}]);
nhControllers.controller("GamePortfolioDetailCtrl", ['$scope', '$routeParams', '$location', function ($scope, $routeParams, $location) {
    $scope.gamePortfolioitem = new GamePortfolioItem();

    $scope.gamePortfolioitem.id = $routeParams.pId;
    $scope.gamePortfolioitem.name = "My name";
    $scope.gamePortfolioitem.description = "My stuff";

}]);

nhControllers.controller("HeaderCtrl",["$scope","$routeParams","$location",function($scope,$routeParams,$location){
     $scope.GoHome=function(){
        $location.path('/');
   }
}]);

nhControllers.controller("PortfolioListCtrl", ["$scope", "PortfolioService", function ($scope, PortfolioService) {
    PortfolioService.GetItems().then(function (response) {
        $scope.$apply(function () {
            $scope.PortfolioItems = eval(response);
        });
    },
    function (response) {
        console.log("error");
    });

}]);
nhControllers.controller("GamePortfolioListCtrl", ["$scope", "GamePortfolioService", function ($scope, GamePortfolioService) {
    GamePortfolioService.GetItems().then(function (response) {
        $scope.$apply(function () {
            $scope.GamePortfolioItems = eval(response);
        });
    },
    function (response) {
        console.log("error");
    });

}]);

nhControllers.controller("VirtualRealityCtrl", ["$scope", "VirtualRealityService", function ($scope, VirtualRealityService) {
    VirtualRealityService.GetItems().then(function (response) {
        $scope.$apply(function () {
            $scope.VirtualRealityItems = eval(response);
        })
    })
}]);
nhControllers.controller("VirtualRealityItemCtrl", ["$scope", "$route","VirtualRealityService", function ($scope, $route,VirtualRealityService) {
    VirtualRealityService.GetItems().then(function (response) {
        $scope.$apply(function () {
            $scope.VirtualRealityItem = response[vrId];
        })
    })
}]);

nhControllers.controller("ResumeCtrl",["$scope","ResumeService",function($scope,ResumeService){
    
     ResumeService.GetEntries().then(function(response){
         $scope.$apply(function(){
            $scope.ResumeItems= eval(response);
         });
     },
     function(response){
         console.log("error");
     });
     
}]);

nhControllers.controller("BlogCtrl",["$scope","WordpressService",function($scope, WordpressService){
     $scope.Blogs=WordpressService.GetBlogsAsync();
}]);
nhControllers.controller("HackCtrl",["$scope",function($scope){
    
}]);

nhControllers.controller("HomeCtrl",["$scope","$routeParams","$location",function($scope,$routeParams,$location){
   $scope.timenow=Date.now(); 
   
   $scope.GoPortfolio = function () {
       $location.path('pdiary');
   }
   $scope.GoGamePortfolio = function () {
       $location.path('game-portfolio');
   }
   $scope.GoPortfolioLightbox = function () {
       $location.path('portfolio');
   }
   $scope.GoVirtualReality = function () {
       $location.path('virtual-reality');
   }
   $scope.GoVirtualRealityItem = function () {
       $location.path('virtual-reality-item');
   }
    $scope.GoBlog=function(){
        $location.path('blog');
   }
    $scope.GoResume=function(){
        $location.path('resume');
   }
     $scope.GoHack=function(){
        $location.path('hack');
   }
     $scope.GoApps=function(){
        $location.path('apps');
   }
   
}]);

nhControllers.controller("PortfolioDiaryCtrl",["$scope","PortfolioService",function($scope,PortfolioService){
   $scope.PortfolioItems=PortfolioService.GetItems();
}]);