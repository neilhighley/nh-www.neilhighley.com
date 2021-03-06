nhDirectives.directive("gamePortfolioItem",[function(){
    
    function GetHTML(){
        var t="";
        t+="<div class='pi-item'>";
        t+="<div class='pi-item-title'>{{data.title}}</div>";
        t+="<div class='pi-item-description'>{{data.description}}</div>";
        return t;
    }
    function CreateHTML(data) {

        var t = "<article>";
        
        t+="<div class='pi-item col-md-6 col-xs-12'>";
        t += "<div class='pi-item-title mobile-ad'>" + data.title + "</div>";
        t += "<div class='pi-item-description'>" + data.description + "</div>";
        if (data.type == "flash") {
            t += "";
            t+="<object classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" ";
            t+="codebase=\"http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0\" ";
            t+=" width=\""+data.width+"\" height=\""+data.height+"\" id=\"game_63\" align=\"\" VIEWASTEXT>";
            t+="<param name=movie value=\""+data.location+"\"> <param name=quality value=high> ";
            t+="<embed src=\""+data.location+"\" quality=high bgcolor=#0076CC  width=\""+data.width+"\" height=\""+data.height+"\" name=\"game_55\" align=\"\"";
            t+=" type=\"application/x-shockwave-flash\" pluginspage=\"http://www.macromedia.com/go/getflashplayer\"></embed> ";
            t+="</object> ";
        }
	if(data.type="javascript"){
 	    t += "";
 	    t += "<a href=\""+data.location+"\" target='"+data.title+"'>Launch Game in new Window</a>";
 	    t += "";
	}
        if(data.date!=undefined){
            t+="<div class='pi-item-date'>"+data.date+"</div>";
        }
        t+="<div class='pi-item-content'>";
        for(var i=0;i<data.images.length;i++){
            t+="<div class='pi-images'>";
            t+="<a title='Play "+data.title+" now' href=\""+data.location+"\" target='"+data.title+"'>";
            t+="<img class='col-xs-11' src='"+data.images[i].src+"'/>";
            t+="</a>";
            t+="<span class='pi-image-text col-xs-11'>"+data.images[i].name;
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
        t+="</div></article>";
        
        return t;
    
    }

    function LinkService(scope, element, attr, ctrl){
        scope.$watch("gamePortfolioItem",function(){
            console.log(eval(scope.gamePortfolioItem));
            element.html(CreateHTML(scope.gamePortfolioItem));
        });
    };
    
    return{
       restrict:"E",
       scope:{
           gamePortfolioItem:"=item"
             },
       template:"",
       link:LinkService
    }
    
    
}]);