Router.route('/', function() {
    Router.go('products');
});
Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/products', {
    name: 'products',
    controller: 'ProductsController'
});
Router.route('/products/:productId', {
    name: 'productDetail',
    waitOn: function() {
        return Meteor.subscribe('products', this.params.productId);
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
//##################CONTROLLER###################
//###############################################

ProductsController = RouteController.extend({
    waitOn: function() {
        return Meteor.subscribe('products');
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