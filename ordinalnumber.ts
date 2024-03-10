let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let number of numbers) {
    let ordinal_suffix: string;

    if (number === 1) {
        ordinal_suffix = "st";
    } else if (number === 2) {
        ordinal_suffix = "nd";
    } else if (number === 3) {
        ordinal_suffix = "rd";
    } else {
        ordinal_suffix = "th";
    }

    console.log(`${number}${ordinal_suffix}`);
}
