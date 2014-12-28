Meteor.startup(function () {
    Products.insert({
        title: "Schuh1",
        brand: "Gabor",
        category: "Stiefel"
    });
    Products.insert({
        title: "Schuh2",
        brand: "Gabor",
        category: "Stiefel"
    });
    Products.insert({
        title: "Schuh3",
        brand: "Gabor",
        category: "Stiefel"
    });
    Products.insert({
        title: "Schuh4",
        brand: "Gabor",
        category: "Stiefel"
    });
    Products.insert({
        title: "Schuh1Laufen",
        brand: "Adidas",
        category: "Laufschuh"
    });
    Products.insert({
        title: "Schuh2Laufen",
        brand: "Adidas",
        category: "Laufschuh"
    });
});