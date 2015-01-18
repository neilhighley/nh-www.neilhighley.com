nhDirectives.directive("resumeItem",[function(){
    
    function GetHTML(){
        var t="";
        t+="<div class='ri-item'>";
        t+="<div class='ri-item-title'>{{data.title}}</div>";
        t+="<div class='ri-item-client'>{{data.client}}</div>";
        t+="<div class='ri-item-description'>{{data.description}}</div>";
        t+="<div class='ri-item-date'>{{data.fromDate}} to {{data.toDate}}</div>";
        t+="<div class='ri-item-content'>{{data.content}}</div>";
        t+="<div class='ri-references'>";
        t+="<div class='ri-reference' ng-repeat='ref in data.references'>";
        t+=" <div class='ri-reference-content' ng-bind-html='ref.content'></div>";
        t+=" <div class='ri-reference-client'>{{ref.name}}, {{ref.position}}</div>";
        t+="</div>"
        t+="<div class='ri-item-tags'>{{data.tags}}</div>";
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