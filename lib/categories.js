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