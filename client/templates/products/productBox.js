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
	categoryTitles: function() {
		var catTitleArr = [];
		_.each(this.category, function(categoryId) {
			var cat = Categories.findOne({_id: categoryId});
			if(cat){
				catTitleArr.push(cat.title);
			}
		});
		return catTitleArr.join(', ');
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