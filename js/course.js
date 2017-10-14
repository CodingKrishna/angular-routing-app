app.controller("courseCtrl",function($scope,$http){

    $http({
        method:"GET",
        url:" http://localhost:3000/courses?"
    }).then(function successCallback(res){
        $scope.courses = res.data;
    }, function failureCallback(res){
        $scope.errorMsg=res.statusText;
    });
});