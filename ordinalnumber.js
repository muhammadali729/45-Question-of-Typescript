var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var number = numbers_1[_i];
    var ordinal_suffix = void 0;
    if (number === 1) {
        ordinal_suffix = "st";
    }
    else if (number === 2) {
        ordinal_suffix = "nd";
    }
    else if (number === 3) {
        ordinal_suffix = "rd";
    }
    else {
        ordinal_suffix = "th";
    }
    console.log("".concat(number).concat(ordinal_suffix));
}
