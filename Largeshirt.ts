function make_shirt(size: string = "large", message: string = "I love TypeScript"): void {
    console.log(`The shirt is ${size} size and it says: "${message}".`);
}


make_shirt();


make_shirt("medium");


make_shirt("small", "Hello, World!");
