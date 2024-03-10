function store_car_info(manufacturer, model) {
    var details = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        details[_i - 2] = arguments[_i];
    }
    var car_info = {
        manufacturer: manufacturer,
        model: model
    };
    for (var i = 0; i < details.length; i += 2) {
        car_info[details[i]] = details[i + 1];
    }
    return car_info;
}
var car_info = store_car_info("Toyota", "Camry", "color", "red", "year", "2023");
console.log(car_info);
