let placesToVisit: string[] = ["Tokyo", "Paris", "Turkey", "New York", "Arizona"];


console.log("Original order:", placesToVisit);


console.log("Alphabetical order:", [...placesToVisit].sort());


console.log("Original order after alphabetical sort:", placesToVisit);


console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());


console.log("Original order after reverse alphabetical sort:", placesToVisit);


placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);


placesToVisit.reverse();
console.log("Back to original order:", placesToVisit);


placesToVisit.sort();
console.log("Sorted in alphabetical order:", placesToVisit);


placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:", placesToVisit);
