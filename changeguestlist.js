var guestList = ["Ubaid", "Faraz", "Aslam"];
var unableToAttend = "Aslam";
console.log("".concat(unableToAttend, " can't make it to the dinner."));
var newGuest = "Wajahat";
guestList[guestList.indexOf(unableToAttend)] = newGuest;
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ", you are cordially invited to dinner. Please let us know if you can attend."));
}
