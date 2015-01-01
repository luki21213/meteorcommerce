var brandSize = 30;
var productSize = 100;
var maxProductQuantity = 20;
var categorySize = 20;
Meteor.startup(function() {
    if (Categories.find().count() === 0) { 
       Categories.insert({
            title: "Schuh",
            level: 0
        });
       Categories.insert({
            title: "Hose",
            level: 0
        });
       Categories.insert({
            title: "Halbschuh",
            level: 1
        });
        Categories.insert({
            title: "Laufschuh",
            level: 1
        });
        Categories.insert({
            title: "Stiefel",
            level: 1
        });
        Categories.insert({
            title: "Damen",
            level: 2
        });
        Categories.insert({
            title: "Herren",
            level: 2
        });     
        Categories.insert({
            title: "Winter",
            level: 2
        }); 
        Categories.insert({
            title: "Sommer",
            level: 2
        }); 
    }
    if (Brands.find().count() === 0) {
        for(var i=0;i<brandSize;i++){
           Brands.insert({
            title: "Brand"+i
        });
       }
   }
   if (Products.find().count() === 0) {
         Products.insert({
            title: "Schuh1",
            brand: getBrandID(),
            category: getCategories(["Schuh","Laufschuh","Damen"]),
            description: "...",
            price: 119.95,
            quantity: getRandomNumber(maxProductQuantity)
        });
         Products.insert({
            title: "EnergyBoost",
            brand: getBrandID(),
            category: getCategories(["Schuh","Halbschuh","Sommer","Herren"]),
            description: "...",
            price: 119.95,
            quantity: getRandomNumber(maxProductQuantity)
        });
         Products.insert({
            title: "SlowMeDown",
            brand: getBrandID(),
            category: getCategories(["Schuh","Laufschuh","Sommer","Damen"]),
            description: "...",
            price: 119.95,
            quantity: getRandomNumber(maxProductQuantity)
        });
         Products.insert({
            title: "ImBoring",
            brand: getBrandID(),
            category: getCategories(["Schuh","Halbschuh","Winter"]),
            description: "...",
            price: 119.95,
            quantity: getRandomNumber(maxProductQuantity)
        });
         Products.insert({
            title: "Haters Gonna Hate",
            brand: getBrandID(),
            category: getCategories(["Schuh","Stiefel","Damen"]),
            description: "...",
            price: 119.95,
            quantity: getRandomNumber(maxProductQuantity)
        });
         Products.insert({
            title: "Bitch I'm Fabulous",
            brand: getBrandID(),
            category: getCategories(["Schuh","Stiefel","Herren"]),
            description: "...",
            price: 119.95,
            quantity: getRandomNumber(maxProductQuantity)
        });
    }
});

getBrandID = function() {
    var obj = Brands.findOne({
        title: "Brand"+getRandomNumber(brandSize)
    });
    return obj._id;
};
getCategories = function(names) {
    var arr = [];   
    for(var i = 0;i<names.length;i++){
        arr.push(Categories.findOne({title: names[i]})._id);
    }
    console.log(arr);
    return arr;

};

getRandomNumber = function(i){
    return Math.floor((Math.random() * i)); 
}