Products = new Mongo.Collection("products");

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
        regEx: SimpleSchema.RegEx.Id,
    },
    category: {
        type: String,
        label: "Category",
        max: 200
    }
});

Products.attachSchema(Schemas.Product);