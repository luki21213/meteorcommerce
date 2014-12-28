Router.route('/', function () {
    //this.render('body');
});
Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/products', {
    name: 'products',
    controller: 'ProductsController'
});


//###############################################
//##################CONTROLLER###################
//###############################################

ProductsController = RouteController.extend({
    //layoutTemplate: 'body',

    //template: 'body',

    //waitOn: function () {
    //    return Meteor.subscribe('post', this.params._id);
    //},
    //
    //data: function () {
    //    return Posts.findOne({_id: this.params._id})
    //},

    action: function () {
        //this.render('body');
        this.render("brandTree",{to: "tree"});
    }
});