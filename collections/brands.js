Brands = new Mongo.Collection("brands");

var Schemas = {};

Schemas.Product = new SimpleSchema({
    title: {
        type: String,
        label: "Title",
        max: 200
    }
});

Brands.attachSchema(Schemas.Product);

Brands.allow({
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
	Meteor.publish('brands', function(id){
		if(id){
			return Brands.find({_id: id});
		}
		return Brands.find();
	});
}