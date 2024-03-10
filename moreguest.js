var guestList = ["Ubaid", "Usama", "Aslam", "Faraz"];
console.log("We found a bigger dinner table!");
var newGuests = ["Salman", "Hassan", "Asaad"];
guestList.unshift(newGuests[0]);
guestList.splice(Math.floor(guestList.length / 2), 0, newGuests[1]);
guestList.push(newGuests[2]);
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ", you are cordially invited to dinner. Please let us know if you can attend."));
}
