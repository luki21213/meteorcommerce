Template.categoriesMenu.helpers({
	topLevelCats: function () {
		return Categories.find({topLevel: true});
	},
	subCats: function() {
		return Categories.find({parentId: this._id});
	},
	hasSubCats: function() {
		return Categories.find({parentId: this._id}).fetch().length > 0;
	}
});

Template.subcatMenu.helpers({
	subCats: function() {
		return Categories.find({parentId: this._id});
	},
	hasSubCats: function() {
		return Categories.find({parentId: this._id}).fetch().length > 0;
	}
});