var app = new angular.module('app', []);

app.controller('linksCtrl', ['$scope', function ($scope) {
    $scope.internalLinks = [{
        'name': 'magazine',
        'link': 'magazine'
    }, {
        'name': 'about',
        'link': 'about'
    }, {
        'name': 'sign up',
        'link': 'sign-up'
    }, {
        'name': 'log in',
        'link': 'log-in'
    }
    ];
    $scope.externalLinks = [{
        'name': '@svbtle',
        'link': 'twitter.com/svbtle'
    }
    ];
}]);

app.controller('articlesCtrl', ['$scope', function ($scope) {
    $scope.articles = {
        'url': '../views/articles/articles.html'
    };
}]);

$(function () {
    var menu = $('#menu');
    var navBar = $('#rightNavBar');
    var menuButton = $('#rightNavMenuButton');
    var buttonIcon = $('#navMenuIcon');
    var menuOpen = false;
    var navText = $("#navText");
    menuButton.on('mousedown', function (e) {
        if (!menuOpen) {
            e.preventDefault();
            menuOpen = true;
            navText.addClass('hidden');
            navBar.css({ 'width': '150px' });
            buttonIcon.addClass('glyphicon-remove').removeClass('glyphicon-chevron-down');
            menu.removeClass('hidden');
        } else {
            e.preventDefault();
            menuOpen = false;
            navBar.css({ 'width': '55px' });
            navText.removeClass('hidden');
            buttonIcon.addClass('glyphicon-chevron-down').removeClass('glyphicon-remove');
            menu.addClass('hidden');
        }
    });
});