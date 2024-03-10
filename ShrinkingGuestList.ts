let guestList: string[] = ["Ubaid", "Aslam", "Faraz", "Wajahat", "Usama", "Asaad", "Azhad"];


console.log("Unfortunately, the new dinner table won't arrive in time, so we can only invite two people for dinner.");


while (guestList.length > 2) {
    let removedGuest = guestList.pop(); 
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}


for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, you are still invited to dinner. Please let us know if you can attend.`);
}


guestList.pop();
guestList.pop();


console.log("Final guest list:", guestList);
