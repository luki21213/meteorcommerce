Meteor.startup(function () {
    if(Categories.find().count()==0){
        Categories.insert({
            title: "Stiefel"
        });
        Categories.insert({
            title: "Laufschuh"
        });
        Brands.insert({
            title: "Gabor"
        });
        Brands.insert({
            title: "Adidas"
        });
        Products.insert({
            title: "Schuh1",
            brand: getBrandID("Gabor"),
            category: getCategoryID("Stiefel"),
        });
        Products.insert({
            title: "Schuh2",
            brand: getBrandID("Gabor"),
            category: getCategoryID("Stiefel"),
        });
        Products.insert({
            title: "Schuh3",
            brand: getBrandID("Adidas"),
            category: getCategoryID("Stiefel"),
        });       
        Products.insert({
            title: "Schuh4",
            brand: getBrandID("Adidas"),
            category: getCategoryID("Stiefel"),
        });        
        Products.insert({
            title: "Schuh5",
            brand: getBrandID("Gabor"),
            category: getCategoryID("Laufschuh"),
        });        
        Products.insert({
            title: "Schuh6",
            brand: getBrandID("Gabor"),
            category: getCategoryID("Laufschuh"),
        });        
        Products.insert({
            title: "Schuh7",
            brand: getBrandID("Aduadas"),
            category: getCategoryID("Laufschuh"),
        });

    }
});

getBrandID = function(name){
    var obj = Brands.findOne({title: name});
    return obj._id;
}
getCategoryID = function(name){
    var obj = Categories.findOne({title: name});
    return obj._id;
}