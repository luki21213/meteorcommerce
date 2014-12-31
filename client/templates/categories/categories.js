Template.categories.helpers({
	number: function () {
		return Products.find({category: this._id}).count();
	}
});
Template.categories.events({
	'click .category-list-item': function () {
		Router.go('category_detail', {
			categoryId: this._id
		});
	}
});