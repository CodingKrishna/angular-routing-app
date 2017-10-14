
app.controller("httpCtrl",function($scope,$http){

    $http({
        method:"GET",
        url:" http://localhost:3000/listUsers?"
    }).then(function successCallback(res){
        $scope.users = res.data;
    }, function failureCallback(res){
        $scope.errorMsg=res.statusText;
    });

});
	