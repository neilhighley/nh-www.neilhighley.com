//services
var nhServices = angular.module('nhServices', []);

nhServices.service("PortfolioService", function () {
    this.GetItems = function () {
        return $.ajax({ url: "/data/portfolio.js" });
    }
});
nhServices.service("GamePortfolioService", function () {
    this.GetItems = function () {
        return $.ajax({ url: "/data/game-portfolio.js" });
    }
});

nhServices.service("VirtualRealityService", function () {
    this.GetItems = function () {
        console.log("VRS.GetItems");
        return $.ajax({ url: "/data/virtual-reality.js" });
    }
    this.GetItem = function () {
        return items[0];
    }
});

nhServices.service("NewsApiService",function(){
    this.GetNews=function(){
        return $.ajax({url:"/data/news.js"});
    }
});

nhServices.service("ResumeService",function(){
    this.GetEntries=function(){
        return $.ajax({url:"/data/resume.js"});
    }
});

nhServices.service("WordpressService",function(){
    this.GetBlogsAsync=function(){
        return $.ajax({url:"http://blog.neilhighley.com/wp-json/posts"});
    };

});

//Alternatively, store the blogs and other data first in a state
nhServices.service("StateService",function($resource){
    var blogs=[];
    var portfolio=[];
    var resume=[];
    
    var blogResource= $resource('/data/blogs.js');
     
     
     this.GetBlogResource= blogResource;
})