Categories = new Mongo.Collection("categories");

var Schemas = {};

Schemas.Product = new SimpleSchema({
    title: {
        type: String,
        label: "Title",
        max: 200
    }
});

Categories.attachSchema(Schemas.Product);

Categories.allow({
	insert: function (userId, doc) {
		return true;
	},
	update: function (userId, doc, fields, modifier) {
		return true;
	},
	remove: function (userId, doc) {
		return true;
	}
});

if(Meteor.isServer){
	Meteor.publish('categories', function(id){
		if(id){
			return Categories.find({_id: id});
		}
		return Categories.find();
	});
}