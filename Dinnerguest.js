var guestList = ["Isaac Newton", "Albert Einstein", "Nikola Tesla", "Ada Lovelace", "Galileo Galilei", "Leonardo da Vinci", "Marie Curie"];
console.log("You are inviting ".concat(guestList.length, " people to dinner."));
console.log("Unfortunately, the new dinner table won't arrive in time, so we can only invite two people for dinner.");
while (guestList.length > 2) {
    var removedGuest = guestList.pop(); // Remove the last guest
    console.log("Sorry, ".concat(removedGuest, ", we can't invite you to dinner."));
}
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ", you are still invited to dinner. Please let us know if you can attend."));
}
guestList.pop();
guestList.pop();
console.log("Final guest list:", guestList);
