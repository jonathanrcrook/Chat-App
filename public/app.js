angular.module('chatApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/')
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: './views/home/homeTemplate.html'
    })
    .state('signup', {
      url: '/signup',
      templateUrl: './views/sign_up/signUpTemplate.html',
      controller: 'signUpCtrl'
    })
    .state('login', {
      url: '/login',
      templateUrl: './views/login/loginTemplate.html',
      controller: 'loginCtrl'
    })
    .state('mainChat', {
      url: '/mainChat',
      templateUrl: './views/mainChat/mainChatPage.html',
      controller: 'mainChatCtrl'
    })
    .state('about', {
      url: '/about',
      templateUrl: './views/about/about.html'
    })
})
