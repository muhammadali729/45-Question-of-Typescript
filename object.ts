let countries = [
    {
        name: "USA",
        capital: "Washington, D.C.",
        population: 331449281
    },
    {
        name: "China",
        capital: "Beijing",
        population: 1444216107
    },
    {
        name: "Pakistan",
        capital: "Islamabad",
        population: 245209815
    }
];


for (let i = 0; i < countries.length; i++) {
    console.log(`Country: ${countries[i].name}`);
    console.log(`Capital: ${countries[i].capital}`);
    console.log(`Population: ${countries[i].population}`);
    console.log("--------------------");
}
