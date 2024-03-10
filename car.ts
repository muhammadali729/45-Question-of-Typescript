function store_car_info(manufacturer: string, model: string, ...details: string[]): object {
    let car_info: {[key: string]: string} = {
        manufacturer: manufacturer,
        model: model
    };

    for (let i = 0; i < details.length; i += 2) {
        car_info[details[i]] = details[i + 1];
    }

    return car_info;
}

let car_info = store_car_info("Toyota", "Camry", "color", "red", "year", "2023");
console.log(car_info);
