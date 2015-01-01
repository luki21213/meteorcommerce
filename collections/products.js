/*
*   Schema for Product Collection
*/
Products = new Mongo.Collection('products');

var Schemas = {};

Schemas.Product = new SimpleSchema({
    title: {
        type: String,
        label: "Title",
        max: 200
    },
    brand: {
        type: String,
        label: "Brand",
        max: 200
    },
    category: {
        type: [String],
        regEx: SimpleSchema.RegEx.Id,
        optional: true,
    },
    description: {
        type: String,
        label: "Description",
        max: 200,
        optional: true
    },
    price: {
        type: Number,
        label: "Price",
        decimal: true,
        min: 0,
        optional: true
    },
    quantity: {
        type: Number,
        label: "Quantity",
        decimal: false,
        min: 0,
        optional: true
    }
});

Products.attachSchema(Schemas.Product);

Products.allow({
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
	Meteor.publish('products', function(id){
		if(id){
			return Products.find({_id: id});
		}
		return Products.find();
	});
}