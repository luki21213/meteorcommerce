Template.productBox.events({
	'click .product-box': function () {
		Router.go('productDetail', {
			productId: this._id
		});
	}
});