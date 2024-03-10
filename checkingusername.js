var current_users = ["Asaad", "Ubaid", "Azhad", "Hassan", "Hussain"];
var new_users = ["Ubaid", "Bobby", "Rizwan", "CHARLIE", "grace"];
var _loop_1 = function (new_user) {
    var is_duplicate = current_users.some(function (user) { return user.toLowerCase() === new_user.toLowerCase(); });
    if (is_duplicate) {
        console.log("Sorry, the username '".concat(new_user, "' is already taken. Please choose a different username."));
    }
    else {
        console.log("Congratulations! The username '".concat(new_user, "' is available."));
    }
};
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    _loop_1(new_user);
}
