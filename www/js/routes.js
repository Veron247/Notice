angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

  .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/register',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('post', {
    url: '/page8',
    templateUrl: 'templates/post.html',
    controller: 'postCtrl'
  })
  
  
    .state('tabsController', {
    url: '/tab',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })
  
    .state('tabsController.viewNotice', {
    url: '/noticeList',
    views: {
      'tab1': {
        templateUrl: 'templates/viewNotice.html',
        controller: 'viewNoticeCtrl'
      }
    }
  })

  .state('tabsController.postNewNotice', {
    url: '/post',
    views: {
      'tab2': {
        templateUrl: 'templates/postNewNotice.html',
        controller: 'postNewNoticeCtrl'
      }
    }
  })

  .state('tabsController.assignRole', {
    url: '/manageUser',
    views: {
      'tab3': {
        templateUrl: 'templates/assignRole.html',
        controller: 'assignRoleCtrl'
      }
    }
  })


  .state('tabsController.details', {
    url: '/noticeDetails',
    views: {
      'tab1': {
        templateUrl: 'templates/details.html',
        controller: 'detailsCtrl'
      }
    }
  })


$urlRouterProvider.otherwise('/home')

  

});