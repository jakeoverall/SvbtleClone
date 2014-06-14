var app = new angular.module('app', []);

app.controller('linksCtrl', ['$scope', function ($scope) {
    $scope.internalLinks = [{
        'name': 'magazine',
        'link': 'magazine',
        'class': 'test'
    }, {
        'name': 'about',
        'link': 'about',
        'class': 'test'
    }, {
        'name': 'sign up',
        'link': 'sign-up',
        'class': 'test'
    }, {
        'name': 'log in',
        'link': 'log-in',
        'class': 'test'
    }
    ];
    $scope.externalLinks = [{
        'name': '@svbtle',
        'link': 'twitter.com/svbtle',
        'class': 'test'
    }
    ];
}])