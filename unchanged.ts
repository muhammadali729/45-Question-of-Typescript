function make_great(magicians: string[]): string[] {
    let great_magicians: string[] = [];
    for (let magician of magicians) {
        great_magicians.push(`the Great ${magician}`);
    }
    return great_magicians;
}

function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

let magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
let great_magicians: string[] = make_great([...magicians]); // Using spread operator to create a copy of the array

show_magicians(magicians);
console.log("\n");
show_magicians(great_magicians);
