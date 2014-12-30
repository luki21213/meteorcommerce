Meteor.startup(function() {
    if (Categories.find().count() === 0) {
        Categories.insert({
            title: "Stiefel"
        });
        Categories.insert({
            title: "Laufschuh"
        });
    }
    if (Brands.find().count() === 0) {
        Brands.insert({
            title: "Gabor"
        });
        Brands.insert({
            title: "Adidas"
        });
    }
    if (Products.find().count() === 0) {
        Products.insert({
            title: "Schuh1",
            brand: getBrandID("Gabor"),
            category: getCategoryID("Stiefel"),
            description: "...",
            price: "119,95"
        });
        Products.insert({
            title: "Schuh2",
            brand: getBrandID("Gabor"),
            category: getCategoryID("Stiefel"),
            description: "...",
            price: "119,95"
        });
        Products.insert({
            title: "Schuh3",
            brand: getBrandID("Adidas"),
            category: getCategoryID("Stiefel"),
            description: "...",
            price: "119,95"
        });
        Products.insert({
            title: "Schuh4",
            brand: getBrandID("Adidas"),
            category: getCategoryID("Stiefel"),
            description: "...",
            price: "119,95"
        });
        Products.insert({
            title: "Schuh5",
            brand: getBrandID("Gabor"),
            category: getCategoryID("Laufschuh"),
            description: "...",
            price: "119,95"
        });
        Products.insert({
            title: "Schuh6",
            brand: getBrandID("Gabor"),
            category: getCategoryID("Laufschuh"),
            description: "...",
            price: "119,95"
        });
        Products.insert({
            title: "Schuh7",
            brand: getBrandID("Aduadas"),
            category: getCategoryID("Laufschuh"),
            description: "...",
            price: "119,95"
        });
    }
});

getBrandID = function(name) {
    var obj = Brands.findOne({
        title: name
    });
    return obj._id;
};
getCategoryID = function(name) {
    var obj = Categories.findOne({
        title: name
    });
    return obj._id;
};