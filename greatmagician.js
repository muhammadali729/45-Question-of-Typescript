function make_great(magicians) {
    var great_magicians = [];
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        great_magicians.push("the Great ".concat(magician));
    }
    return great_magicians;
}
function show_magicians(magicians) {
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        console.log(magician);
    }
}
var magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
var great_magicians = make_great(magicians);
show_magicians(great_magicians);
