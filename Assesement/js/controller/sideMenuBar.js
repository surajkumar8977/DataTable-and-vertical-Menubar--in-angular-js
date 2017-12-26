mainApp.controller("sideMenuBar",function($timeout,$scope){

        angular.element('.toggleIcon').removeClass('up');
        angular.element('.toggleIcon').addClass('down');

    $scope.toggleCheck = function(val)
        {
                if (angular.element('.subToggle'+val).hasClass('in'))
                {
                    angular.element('.toggleIcon'+val).removeClass('up');
                    angular.element('.toggleIcon'+val).addClass('down');
                }
                else{
                    angular.element('.toggleIcon'+val).removeClass('down');
                    angular.element('.toggleIcon'+val).addClass('up');
                }  
        }
    
});
