function make_sandwich(...items: string[]): void {
    console.log("Sandwich order:");
    for (let item of items) {
        console.log("- " + item);
    }
    console.log("\n");
}

make_sandwich("Bread", "Cheese", "Tomato", "Lettuce");
make_sandwich("Bread", "Turkey", "Swiss Cheese", "Mustard");
make_sandwich("Bread", "Ham", "Cheddar Cheese");
