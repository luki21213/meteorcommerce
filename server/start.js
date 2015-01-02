var brandSize = 30;
var productSize = 100;
var maxProductQuantity = 20;
var categorySize = 20;
Meteor.startup(function() {
    if (Categories.find().count() === 0) {
        var ladiesId = Categories.insert({
            title: "Damen",
            topLevel: true
        });
        var menId = Categories.insert({
            title: "Herren",
            topLevel: true
        });
        var shoeId = Categories.insert({
            title: "Schuh",
            parentId: menId
        });
        Categories.insert({
            title: "Hose",
            parentId: menId
        });
        Categories.insert({
            title: "Halbschuh",
            parentId: shoeId
        });
        Categories.insert({
            title: "Laufschuh",
            parentId: shoeId
        });
        Categories.insert({
            title: "Stiefel",
            parentId: shoeId
        });
    }
    if (Brands.find().count() === 0) {
        for (var i = 0; i < brandSize; i++) {
            Brands.insert({
                title: "Brand" + i
            });
        }
    }
    if (Products.find().count() === 0) {
        Products.insert({
            title: "Schuh1",
            brand: getBrandID(),
            category: getCategories(["Schuh", "Laufschuh", "Damen"]),
            description: "...",
            price: 119.95,
            quantity: getRandomNumber(maxProductQuantity)
        });
        Products.insert({
            title: "EnergyBoost",
            brand: getBrandID(),
            category: getCategories(["Schuh", "Halbschuh", "Herren"]),
            description: "...",
            price: 119.95,
            quantity: getRandomNumber(maxProductQuantity)
        });
        Products.insert({
            title: "SlowMeDown",
            brand: getBrandID(),
            category: getCategories(["Schuh", "Laufschuh", "Damen"]),
            description: "...",
            price: 119.95,
            quantity: getRandomNumber(maxProductQuantity)
        });
        Products.insert({
            title: "ImBoring",
            brand: getBrandID(),
            category: getCategories(["Schuh", "Halbschuh"]),
            description: "...",
            price: 119.95,
            quantity: getRandomNumber(maxProductQuantity)
        });
        Products.insert({
            title: "Haters Gonna Hate",
            brand: getBrandID(),
            category: getCategories(["Schuh", "Stiefel", "Damen"]),
            description: "...",
            price: 119.95,
            quantity: getRandomNumber(maxProductQuantity)
        });
        Products.insert({
            title: "Bitch I'm Fabulous",
            brand: getBrandID(),
            category: getCategories(["Schuh", "Stiefel", "Herren"]),
            description: "...",
            price: 119.95,
            quantity: getRandomNumber(maxProductQuantity)
        });
    }
});

getBrandID = function() {
    var obj = Brands.findOne({
        title: "Brand" + getRandomNumber(brandSize)
    });
    return obj._id;
};
getCategories = function(names) {
    var arr = [];
    for (var i = 0; i < names.length; i++) {
        arr.push(Categories.findOne({
            title: names[i]
        })._id);
    }
    console.log(arr);
    return arr;

};

getRandomNumber = function(i) {
    return Math.floor((Math.random() * i));
}