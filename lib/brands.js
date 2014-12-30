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