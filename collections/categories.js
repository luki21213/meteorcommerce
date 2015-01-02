/* 
*	Categories Schema
*	A Category with level 0 is e.g a Shoe (Product category)
*	Level 1 could be male and runningshoe
*	Levels for tree-structure. You know what i mean :D
 */
Categories = new Mongo.Collection("categories");

var Schemas = {};

Schemas.Category = new SimpleSchema({
    title: {
        type: String,
        label: "Title",
        max: 200
    },
    topLevel: {
    	type: Boolean,
    	optional: true
    },
    parentId: {
    	type: String,
    	optional: true
    }
});

Categories.attachSchema(Schemas.Category);

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