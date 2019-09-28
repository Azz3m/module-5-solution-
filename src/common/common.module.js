(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://azz3m-assignment.herokuapp.com/')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
