/**
* appService Module
*
* Description
*/
var appService=angular.module('appService', []);
	appService.service('form', function(){
		// this.modelName="";
		this.MaxId=4;
		this.userInput=[
			{id:0,name:"ModelName",stas:"true",value:""},
			{id:1,name:"PropertyName",stas:"true",value:""},
			{id:2,name:'PropertyType',stas:"true",value:""},
			{id:3,name:'Schema',stas:"true",value:""},
			{id:4,name:'Field',stas:"true",value:""},
		];
	})