function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("The shirt is ".concat(size, " size and it says: \"").concat(message, "\"."));
}
make_shirt();
make_shirt("medium");
make_shirt("small", "Hello, World!");
