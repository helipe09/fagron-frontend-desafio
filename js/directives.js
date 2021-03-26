angular.module("blog").directive("compHead", function(){
    return{
        templateUrl:'components/comp-header.html'
    };
});

angular.module("blog").directive("compFooter", function(){
    return{
        templateUrl: 'components/comp-footer.html'
    };
});