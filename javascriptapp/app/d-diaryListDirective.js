nhDirectives.directive("diaryList",[function(){
    
    var PortfolioItems;
    
    function GetTemplate(){
       
        var t='';
        t=t+'<div id="pd-portfolio"></div>';
        t=t+'<div id="pd-news"></div>';
        
        t=t+'<ul class="pd-years" ng-init="years=[2015,2014,2013,2012,2011,2010,2009]">';
        t=t+'    <li ng-repeat="year in years">';
        t=t+'        <div class="pd-year-header text-center" ';
        t=t+'        ng-click="yearclick(year)"';
        t=t+'        ng-mouseover="yearover(year)"';
        t=t+'        ng-mouseout="yearout(year)">{{year}}</div>';
        t=t+'        <ul class="pd-months" ng-init="months=[\'DEC\',\'NOV\',\'OCT\',\'SEP\',\'AUG\',\'JULY\',\'JUNE\',\'MAY\',\'APRIL\',\'MARCH\',\'FEB\',\'JAN\']">';
        t=t+'        <li ng-repeat="month in months | monthFilter:year" ';
        t=t+'        class="pd-month text-center" ';
        t=t+'        ng-click="monthclick(year,month,$event)"';
        t=t+'        ng-mouseover="monthover(year,month,$event)"';
        t=t+'        ng-mouseout="monthout(year,month,$event)"';
        t=t+'        data-month="month"';
        t=t+'        data-year="year">{{month}}</li>';
        t=t+'        </ul>';
        t=t+'    </li>';
        t=t+'    </ul>';
        
        return t;
        
    };
    
   function LinkService(scope){

           PortfolioItems=scope.portfolioItems;//Portfolio service passed as attribute
          // NewsApiService=scope.napi();
           
           scope.yearclick=OnYearClick;
           scope.yearover=OnYearOver;
           scope.yearout=OnYearOut;
           
           scope.monthclick=OnClickMonth;
           scope.monthout=OnRolloverMonth;
           scope.monthover=OnRolloverMonth;
           
       };
    
    function OnYearClick(yr,evt){
         console.log("OnYearClick:"+yr);
    }
    function OnYearOver(yr,evt){
         console.log("OnYearOver:"+yr);
    }
    function OnYearOut(yr,evt){
         console.log("OnYearOut:"+yr);
    }
    
    function OnClickMonth(month,year,evt){
         console.log("monthClick:"+month);
         var pos=$(evt.target).position();
         
    }
    
    function OnRolloutMonth(month,year,evt){
        console.log("MonthOut:"+month+":"+year);
    };
    
    function OnRolloverMonth(month,year,evt){
        
        console.log("MonthOver:"+month+":"+year);
    };
   
   return{
       restrict:"E",
       scope:{
           portfolioItems:"&portfolioItems"
             },
       template:GetTemplate(),
       link:LinkService,
       /*compile:function(scope,element,attrs){
          
       }*/
       
   } 
}]);