var app = angular.module("myApp",['ngRoute']);
app.config(function($routeProvider) {
  
  $routeProvider.when('/home',{
         templateUrl :"home.html",
  }).when('/students',{
         templateUrl: "students.html",
         controller: "httpCtrl"
  }).when('/courses',{
     templateUrl: "course.html",
     controller: "courseCtrl"
  });
});
