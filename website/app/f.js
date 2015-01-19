//filters the months based on months in the past
angular.module('nhFilters', []).filter('monthFilter', function() {
  return function(months, year) {
        var outMonths=['DEC','NOV','OCT','SEP','AUG','JULY','JUNE','MAY','APRIL','MARCH','FEB','JAN'];
        var thisMonth=(new Date()).getMonth();
        var thisYear=(new Date()).getFullYear();
        var st=0;
        var en=12;
        if(thisYear==year){
            st=Number(11-thisMonth);
            en=Number(12-thisMonth);
        }
        return outMonths.slice(st,en);
  };
});