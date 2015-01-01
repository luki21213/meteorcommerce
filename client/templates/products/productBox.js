Template.productBox.events({
	'click .product-box': function() {
		Router.go('productDetail', {
			productId: this._id
		});
	},
	'click a.thumbnail': function(e) {
		e.preventDefault();
	}
});

Template.productBox.helpers({
	cat: function() {
		return  Categories.findOne({_id: ""+this+""});
	},
	brandName: function() {
		var brand = Brands.findOne({
			_id: this.brand
		});
		if (brand && brand.hasOwnProperty('title')) {
			return brand.title;
		}
	}
});