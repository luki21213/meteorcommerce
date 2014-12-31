Router.route('/', function() {
    Router.go('products');
});
Router.configure({
    layoutTemplate: 'layout'
});

//###############################################
//##################Products###################
//###############################################
Router.route('/products', {
    name: 'products',
    controller: 'ProductsController'
});
Router.route('/products/:productId', {
    name: 'productDetail',
    waitOn: function() {
        return [
            Meteor.subscribe('products', this.params.productId),
            Meteor.subscribe('categories'),
            Meteor.subscribe('brands')
        ];
    },
    action: function() {
        this.render('productDetail', {
            to: "content"
        });
    },
    data: function() {
        return Products.findOne({_id: this.params.productId});
    }
});
Router.route('/products/productAdmin', {
    name: 'productAdmin',
    action: function() {
        this.render('productAdmin', {
            to: "content"
        });
    }
});
//###############################################
//##################Categories###################
//###############################################
Router.route('/categories',{
    name: 'categories',
    controller: 'CategoriesController'
});
Router.route('/categories/:categoryId', {
    name: 'category_detail',
    waitOn: function() {
        return [
            Meteor.subscribe('products'),
            Meteor.subscribe('categories'),
            Meteor.subscribe('brands')
        ];
    },
    action: function() {
        this.render('category_detail', {
            to: "content"
        });
    },
    data: function(){
        return {
            title: Categories.findOne({_id: this.params.categoryId}).title,
            products: Products.find({category: this.params.categoryId})
        };
    }
});


//###############################################
//##################CONTROLLER###################
//###############################################

ProductsController = RouteController.extend({
    waitOn: function() {
        return [
            Meteor.subscribe('products'),
            Meteor.subscribe('categories'),
            Meteor.subscribe('brands')
        ];
    },
    action: function() {
        if (this.ready()) {
            this.render('products', {
                to: "content"
            });
        }
    },
    data: function() {
        return {
            products: Products.find()
        };
    },
});

CategoriesController = RouteController.extend({
    waitOn: function() {
        return [
            Meteor.subscribe('products'),
            Meteor.subscribe('categories'),
            Meteor.subscribe('brands')
        ];
    },
    action: function() {
        if (this.ready()) {
            this.render('categories', {
                to: "content"
            });
        }
    },
    data: function() {
        return {
            categories: Categories.find()
        };
    },
});