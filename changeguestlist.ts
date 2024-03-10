let guestList: string[] = ["Ubaid", "Faraz", "Aslam"];


let unableToAttend: string = "Aslam";
console.log(`${unableToAttend} can't make it to the dinner.`);


let newGuest: string = "Wajahat";
guestList[guestList.indexOf(unableToAttend)] = newGuest;


for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, you are cordially invited to dinner. Please let us know if you can attend.`);
}

