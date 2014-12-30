Meteor.startup(function() {
    if (Products.find().fetch().length === 0) {
        Products.insert({
            title: "Schuh1",
            brand: "Gabor",
            category: "Stiefel",
            description: "...",
            price: "119,95"
        });
        Products.insert({
            title: "Schuh2",
            brand: "Gabor",
            category: "Stiefel",
            description: "...",
            price: "119,95"
        });
        Products.insert({
            title: "Schuh3",
            brand: "Gabor",
            category: "Stiefel",
            description: "...",
            price: "119,95"
        });
        Products.insert({
            title: "Schuh4",
            brand: "Gabor",
            category: "Stiefel",
            description: "...",
            price: "119,95"
        });
        Products.insert({
            title: "Schuh1Laufen",
            brand: "Adidas",
            category: "Laufschuh",
            description: "...",
            price: "119,95"
        });
        Products.insert({
            title: "Schuh2Laufen",
            brand: "Adidas",
            category: "Laufschuh",
            description: "...",
            price: "119,95"
        });
    }
});