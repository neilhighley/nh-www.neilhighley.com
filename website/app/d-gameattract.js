nhDirectives.directive("gameAttract",[function(){
    
    function GetHTML(){
        var t="";
        t+="<div class='ri-game'>";
        t+="<a title='Link to play the drone-shooter game' href='/#/game-portfolio'><img src='/images/playnow_160x124.png'/></a>"
        t+="</div>";

        return t;
    }

    function LinkService(scope, element, attr, ctrl){

    };
    
    return{
       restrict:"E",
       scope:{
           data:"=data"
             },
       template:GetHTML(),
       link:LinkService,
    }
    
    
}]);