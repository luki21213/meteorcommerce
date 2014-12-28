Template.brandTree.helpers({
    tree: function () {
        var products = Products.find().fetch();
    }
});

Template.brandTree.rendered = function () {
    $('#brandTree').jstree();
}
