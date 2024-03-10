function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich order:");
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        console.log("- " + item);
    }
    console.log("\n");
}
make_sandwich("Bread", "Cheese", "Tomato", "Lettuce");
make_sandwich("Bread", "Turkey", "Swiss Cheese", "Mustard");
make_sandwich("Bread", "Ham", "Cheddar Cheese");
