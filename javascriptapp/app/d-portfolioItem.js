nhDirectives.directive("portfolioItem",[function(){
    
    function GetHTML(){
        var t="";
        t+="<div class='pi-item'>";
        t+="<div class='pi-item-title'>{{data.title}}</div>";
        t+="<div class='pi-item-description'>{{data.description}}</div>";
        return t;
    }
  function CreateHTML(data){
        var t="";
        t+="<div class='pi-item col-md-6'>";
        t+="<div class='pi-item-title'>"+data.title+"</div>";
        t+="<div class='pi-item-description'>"+data.description+"</div>";
        if(data.date!=undefined){
            t+="<div class='pi-item-date'>"+data.date+"</div>";
        }
        t+="<div class='pi-item-content container'>";
        for(var i=0;i<data.images.length;i++){
            t+="<div class='pi-images container'>";
            t+="<img class='row' src='"+data.images[i].src+"'/>";
            t+="<span class='pi-image-text row'>"+data.images[i].name;
            if(data.images[i].date!=undefined){
                t+=", "+data.images[i].date;
            }
            t+="</span>";
            t+="</div>";
        }
        t+="</div>";
        if(data.tags!=undefined){
            t+="<div class='pi-item-tags'>"+data.tags+"</div>";
        }
        t+="</div>";
        
        return t;
    
    }

    function LinkService(scope, element, attr, ctrl){
        scope.$watch("portfolioItem",function(){
            console.log(eval(scope.portfolioItem));
            element.html(CreateHTML(scope.portfolioItem));
        });
    };
    
    return{
       restrict:"E",
       scope:{
           portfolioItem:"=item"
             },
       template:"",
       link:LinkService
    }
    
    
}]);