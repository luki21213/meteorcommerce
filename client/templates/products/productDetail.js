Template.productDetail.helpers({
	categoryName: function () {
		var cat = Categories.findOne({
			_id: this.category
		});
		if (cat && cat.hasOwnProperty('title')) {
			return cat.title;
		}
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