//factories
var nhFactories = angular.module('nhFactories', []);

nhFactories.factory("WordpressFactory",function($q,$http,$resource){
    return {
        GetBlogs:function(){
            var promise= $.ajax({url:"/data/blogs.js"});
            return promise;
        },
        GetBlogsResource: $resource('/data/blogs.js')
    }
});

nhFactories.factory("WordpressFactory2",function($resource){
    return $resource('/data/blogs.js');
});


nhFactories.factory("PortfolioFactory", function ($q) {
    return {
        GetPortfolios: function () {
            var promise = $.ajax({ url: "/data/portfolio.js" });
            return promise;
        }
    }
});
nhFactories.factory("PortfolioGameFactory", function ($q) {
    return {
        GetPortfolios: function () {
            var promise = $.ajax({ url: "/data/game-portfolio.js" });
            return promise;
        }
    }
});

nhFactories.factory("ResumeFactory",function($q){
    return {
        GetResumes:function(){
             var promise= $.ajax({url:"/data/resume.js"});
            return promise;
        }
    }
});
