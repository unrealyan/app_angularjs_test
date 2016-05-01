/**
* app Module
*
* Description
*/
var app=angular.module('app', ['ngRoute','ngAnimate','appService']);
	app.controller('panel', ['$scope','form','$http',function($scope,form,$http){
		$scope.ModelDefineName=form.userInput[0].value;
		$scope.name=form.userInput[1].value;
		$scope.type=form.userInput[2].value;
		$scope.schema=form.userInput[3].value;
		$scope.field=form.userInput[4].value;
		$scope.remove=function(){//删减表单项
			if(form.MaxId>0){
				$("#"+[form.MaxId]).hide();
				form.userInput[form.MaxId].stas="false";
				form.MaxId--;
				console.log(form.MaxId);
			}else{
				form.MaxId=0;
			}
			
		};
		$scope.add=function(){//增加表单项
			form.MaxId++;
			if(form.MaxId<=4){
				console.log(form.MaxId);
				$("#"+[form.MaxId]).show();
				form.userInput[form.MaxId].stas="true";
			}else{
				form.MaxId=4;
			}
			
		};
		$scope.submit=function(){
			form.userInput[0].value=$scope.ModelDefineName;
			form.userInput[1].value=$scope.name;
			form.userInput[2].value=$scope.type;
			form.userInput[3].value=$scope.schema;
			form.userInput[4].value=$scope.field;
			console.log("开始传输数据");
			$http({
				url:'app.php',
				method:'POST',
				data:{data:form.userInput}
			}).success(function(response){
				console.log(response);
			})
		}
	}]);
	// app.controller('submit', ['$scope,$http', function($scope,$http){
	// 	$http.get('data/detail.php?dno='+$routeParams.dno)
	// 	.success(function(response){
	// 		$scope.detail=response;
	// 		$scope.pwd=s2.user.pwd;
	// 	})
	// }])