/**
 * Created by charlesDuan on 2017/2/3.
 */

var App = angular.module('myApp',[]);
App.controller('registerListCtrl', ['$scope', function ($scope) {
    $scope.arr = [{name:'测试项目登记单',code:'No.0001',status:'进行中',createTime:'2017-02-03'}];
    //点击登记按钮显示登记模态框
    $scope.showRegister = function () {
        $(".register").modal({
            show: true,
            backdrop: false
        });
    };
    //提交项目登记单
    $scope.submit = function (item) {
        $scope.arr.push(item);
        $('.register').modal('hide');
    };

    //显示查看项目登记单模态框
    $scope.watchProjectList = function (item) {
        $(".watch").modal({
            show: true,
            backdrop: false
        });
        $scope.watchItem = item;

    };

    //关闭项目登记单模态框，清空表单
    $('.register').on('hidden.bs.modal', function () {
        $scope.item = "";
    });
}]);