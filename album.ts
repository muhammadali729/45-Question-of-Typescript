function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
    let album: { artist: string, title: string, tracks?: number } = {
        artist: artist,
        title: title
    };

    if (tracks) {
        album.tracks = tracks;
    }

    return album;
}


let album1 = make_album("Stella Nova", "Cosmic Reverie");
let album2 = make_album("Luna Rivers", " Moonlit Serenade", 12);
let album3 = make_album("Echoes of Autumn", "Serene Seasons", 8);


console.log(album1);
console.log(album2);
console.log(album3);
