mainApp.controller("templateController",function($timeout,$scope, DTOptionsBuilder, DTColumnBuilder){
$scope.instruction = false;
    $scope.templateTypeRole = [{roleType: 'SMS'},{roleType: 'email'}];
    $scope.stausVal = [{status: 'Active'}, {status: 'Inactive'}];

    angular.element('.alert-danger').hide();
    angular.element('.alert-success').hide();

      $scope.vm = {};

    $scope.vm.dtOptions = DTOptionsBuilder.newOptions()
      .withOption('order', [0, 'asc']);
    
    $scope.toggle = function(data)
        {
        $timeout(function(){
            
            if (data.toggle)
                {
                    data.status = 'Active';
                }
            else{
                data.status = 'Inactive';
            }
            
        },1);
        }
 
    
  $scope.data=[
      {tempId: 456745, tempName: 'TempField1', tempType: 'SMS', tmpDate: 'dtd', status: 'Active', toggle:true},
      {tempId: 456762, tempName: 'LoremIpsum', tempType: 'email', tmpDate: 'dtd', status: 'Inactive',   toggle:false},
      {tempId: 456772, tempName: 'Test Case', tempType: 'email', tmpDate: 'dtd', status: 'Active', toggle:true}
           ];
    
    $scope.addRow = function()
    {
        if (($scope.tmplId == undefined && $scope.tmplType == undefined && $scope.tmplName == undefined && $scope.tmplStatus  == undefined) || ($scope.tmplId == '' && $scope.tmplType == '' && $scope.tmplName == '' && $scope.tmplStatus  == ''))
            {
                angular.element('.alert-danger').show();
                angular.element('.alert-success').hide();
            }
        else
            {
                if ($scope.tmplStatus == 'Active')
                    {
                        $scope.sendObj =  {tempId: $scope.tmplId, tempName: $scope.tmplName, tempType: $scope.tmplType, tmpDate: 'dtd', status: $scope.tmplStatus, toggle:true};
                    }
                else{
                    $scope.sendObj =  {tempId: $scope.tmplId, tempName: $scope.tmplName, tempType: $scope.tmplType, tmpDate: 'dtd', status: $scope.tmplStatus, toggle:false};
                }
                
                $timeout(function(){
                    $scope.data.unshift($scope.sendObj);
                    $scope.tmplId = '';
                    $scope.tmplName = '';
                    $scope.tmplType = '';
                    $scope.tmplStatus = '';
                    angular.element('.alert-success').show();
                    angular.element('.alert-danger').hide();
                },1);
               
            }
console.log('tmplId--------'+$scope.tmplId+ '----tmplType----'+$scope.tmplType+'---tmplName---'+$scope.tmplName+'---tmplStatus---'+$scope.tmplStatus);
    }

//$scope.dataTableOpt = {
//   //custom datatable options 
//  // or load data through ajax call also
//  "aLengthMenu": [[10, 50, 100,-1], [10, 50, 100,'All']],
//  };
});
