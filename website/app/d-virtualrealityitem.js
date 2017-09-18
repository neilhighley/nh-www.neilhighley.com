nhDirectives.directive("virtualRealityItem", [function () {
    function GetHTML() {
        var t = "";
        t += "<div class='pi-item'>";
        t += "<div class='pi-item-title'>{{data.title}}</div>";
        t += "<div class='pi-item-description'>{{data.description}}</div>";
        return t;
    }
    function CreateHTML(data) {
        
        var t = "<article>";

        t += "<div class='vr-item col-md-6 col-xs-12 pi-vr-"+data.type+"'>";
        t += "<div class='vr-item-title'>" + data.title + "</div>";
        t += "<div class='vr-item-description'>" + data.description + "</div>";
        t += "<div class='vr-item-link'><a href='" + data.location + "' target='_blank'>Open Scene</a></div>";
        t += "</div>";
        t += "</article>";
        return t;
    }
    function LinkService(scope, element, attr, ctrl) {
        scope.$watch("virtualRealityItem", function () {
            console.log(eval(scope.virtualRealityItem));
            element.html(CreateHTML(scope.virtualRealityItem));
        });
    };

    return {
        restrict: "E",
        scope: {
            virtualRealityItem: "=item"
        },
        template: "",
        link: LinkService
    }
}]);