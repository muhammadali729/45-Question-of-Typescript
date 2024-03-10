let current_users: string[] = ["Asaad", "Ubaid", "Azhad", "Hassan", "Hussain"];
let new_users: string[] = ["Ubaid", "Bobby", "Rizwan", "CHARLIE", "grace"];

for (let new_user of new_users) {
    let is_duplicate = current_users.some(user => user.toLowerCase() === new_user.toLowerCase());

    if (is_duplicate) {
        console.log(`Sorry, the username '${new_user}' is already taken. Please choose a different username.`);
    } else {
        console.log(`Congratulations! The username '${new_user}' is available.`);
    }
}
