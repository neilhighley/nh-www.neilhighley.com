nhDirectives.directive("blogListing",["$compile",function($compile){
        function GetHTML(){

        var t="";
        t+="<ul class='b-list' ng-repeat='blog in $parent.blogs'>\n";
        t+="  <li>\n";
        t+="    <h1>{{blog.title}}</h1>\n";
        t+="    <h2>{{blog.date}}</h2>\n";
        t+="    <div class=\"b-content\">{{blog.content}}</div>\n";
        t+="  </li>";
        t+="</ul>";
        return t;
    };
    
    function CreateHTML(blogs){
         var t="";
        t+="<ul class='b-list'>\n";
        for(var b=0;b<blogs.length;b++){
            var blog=blogs[b];
            t+="  <li>\n";
            t+="    <h1>"+blog.title+"</h1>\n";
            t+="    <div class='b-link'><a target='_blank' href='"+blog.link+"'>"+blog.link+"</a></div>\n";
            t+="    <h2>"+formatDate(blog.date)+"</h2>\n";
            t+="    <div class=\"b-content\">"+blog.content+"</div>\n";
            t+="    <div class='b-link'><a target='_blank' ref='"+blog.link+"'>"+blog.link+"</a></div>\n";
            t+="  </li>";
        }
        t+="</ul>";
        return t;
    
    }
    
    function formatDate(str){
        var t="";
        var m_names = new Array("January", "February", "March", 
        "April", "May", "June", "July", "August", "September", 
        "October", "November", "December");
        
        var d = new Date();
        var curr_date = d.getDate();
        var curr_month = d.getMonth();
        var curr_year = d.getFullYear();
        t=curr_date + "-" + m_names[curr_month] + "-" + curr_year;
        return t;
        
    }

    function LinkService(scope, element, attr, ctrl){
        scope.blogs.then(function(response){
            element.html(CreateHTML(eval(response)));
        },
        function(response){
           element.html("data error");
        });
        
    };
    
   
    return{
       restrict:"E",
       scope:{
           blogs:"=blogs"
             },
       template:"",
       link:LinkService
    }
    
    
}]);