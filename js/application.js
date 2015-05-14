/**
 * Created by oscar on 5/7/15.
 */
(function () {
    var app = angular.module('store', []);

    app.controller("StoreController", [ "$http", function ($http) {
        var store = this;
        store.products = [];
        $http.get('js/products.JSON').success(function(data){
            store.products = data;
            console.log(store.products);
        });
    }]);

    app.controller("PanelController", function () {
        this.tab = 1;
        this.selectTab = function (setTab) {
            this.tab = setTab;
        };
        this.isSelected = function (checkTab) {
            return this.tab === checkTab;
        };
    });

    app.controller("ReviewController", function () {
        this.review = {};
        this.addReview = function (product) {
            product.reviews.push(this.review);
            this.review = {};
        };
    });

    app.directive("productTitle", function () {
        return {
            restrict: 'A',
            templateUrl: 'product-title.html'
        };
    });

})();