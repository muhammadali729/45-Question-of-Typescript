function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
// Make three dictionaries representing different albums
var album1 = make_album("Stella Nova", "Cosmic Reverie");
var album2 = make_album("Luna Rivers", " Moonlit Serenade", 12);
var album3 = make_album("Echoes of Autumn", "Serene Seasons", 8);
// Print each return value to show that Objects are storing the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);
