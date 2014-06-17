var app = new angular.module('app', []);

app.controller('linksCtrl', ['$scope', function ($scope) {
    $scope.internalLinks = [{
        id: 1,
        'name': 'magazine',
        'link': 'magazine'
    }, {
        id: 2,
        'name': 'about',
        'link': 'about'
    }, {
        id: 3,
        'name': 'sign up',
        'link': 'sign-up'
    }, {
        id: 4,
        'name': 'login',
        'link': 'login'
    }
    ];

    $scope.activeView = 1;
    
    $scope.loadView = function (internalLinksId) {
        $scope.activeView = internalLinksId;
    };

    $scope.externalLinks = [{
        'name': '@svbtle',
        'link': 'twitter.com/svbtle'
    }
    ];
}]);

app.controller('articlesCtrl', ['$scope', function ($scope) {
    $scope.articles = {
        'url': '/SvbtleClone/app/views/articles/articles.html'
    };
}]);

app.directive('leftNavbar', function () {
    return {
        restrict: 'E',
        templateUrl: '/SvbtleClone/app/views/shared/left-navbar.html'
    };
});

app.directive('rightMenubar', function () {
    return {
        restrict: 'E',
        templateUrl: '/SvbtleClone/app/views/shared/right-menubar.html'
    };
});

app.directive('articles', function () {
    return {
        restrict: 'E',
        templateUrl: '/SvbtleClone/app/views/articles/articles.html'
    };
});

app.directive('subArticles', function () {
    return {
        restrict: 'E',
        templateUrl: '/SvbtleClone/app/views/articles/sub-articles.html'
    };
});

app.directive('about', function () {
    return {
        restrict: 'E',
        templateUrl: '/SvbtleClone/app/views/about/about.html'
    };
});


app.directive('footerLayout', function () {
    return {
        restrict: 'E',
        templateUrl: '/SvbtleClone/app/views/shared/footer-layout.html'
    };
});


$('#content').bind('DOMSubtreeModified', function (e) {
    if (e.target.innerHTML.length > 0) {

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
    }
});