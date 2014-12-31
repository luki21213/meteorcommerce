var brandSize = 30;
var productSize = 100;
var maxProductQuantity = 20;
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
        for(var i=0;i<brandSize;i++){
           Brands.insert({
            title: "Brand"+i
        });
       }
   }
   if (Products.find().count() === 0) {
    for(var i = 0;i<productSize;i++){
         Products.insert({
            title: "Product"+1,
            brand: getBrandID(),
            category: getCategoryID("Stiefel"),
            description: "...",
            price: 119.95,
            sex: "male",
            quantity: getRandomNumber(maxProductQuantity)
        });
     }
    }
});

getBrandID = function() {
    var obj = Brands.findOne({
        title: "Brand"+getRandomNumber(brandSize)
    });
    return obj._id;
};
getCategoryID = function(name) {
    var obj = Categories.findOne({
        title: name
    });
    return obj._id;
};

getRandomNumber = function(i){
    return Math.floor((Math.random() * i)); 
}