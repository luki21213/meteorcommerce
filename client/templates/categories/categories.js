Template.categories.helpers({
	shoeNumber: function () {
		return Products.find({category: this._id}).count();
	},
	brandNumber: function(){
		return Products.find({category: this._id}).distinct('brand',true).count();
	}
});
Template.categories.events({
	'click .category-list-item': function () {
		Router.go('category_detail', {
			categoryId: this._id
		});
	}
});