Template.brandTree.helpers({
    tree: function () {
        var products = Products.find().fetch();
    },
    categories: function(){
    	return Categories.find();
    }
});

Template.brandTree.rendered = function () {
    $('#brandTree').jstree();
}
