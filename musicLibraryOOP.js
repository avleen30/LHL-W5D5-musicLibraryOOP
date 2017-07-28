
class Library {

  constructor(name, creator) {
    this._name = name;
    this._creator = creator;
    this._playlists = [];
  }

  addPlaylist(aPlaylist) {
    this._playlists.push(aPlaylist);
  }

  toString() {
    let info = "";

    info += `Library
    * name: ${this._name}
    * creator: ${this._creator}
    * playlist: \n`;

    // Looking for a playlist
    for (const playlist of this._playlists) {
      info += `       - ${playlist._name}\n`;

      // Looking for a track
      for (const track of playlist._tracks) {
        const min = Math.floor(track._lengthInSec / 60);
        let sec = track._lengthInSec % 60;
        if (sec <= 9) {
          sec = '0' + sec.toString();
        }
        info += `         . ${track._title}\t${track._rating} stars\t${min}:${sec} min\n`;
      }
    }

    return info;
  }

}

class Playlist {

  constructor(name) {
    this._name = name;
    this._tracks = [];
  }

  addTracks(aTrack) {
    this._tracks.push(aTrack);
  }

  overallRating() {
    let totalRating = 0;
    const noOfTracks = this._tracks.length;

    // Looking for a track
    for (const track of this._tracks) {
      totalRating += track._rating;
    }

    return totalRating / noOfTracks;
  }

  totalDuration() {
    let totalLength = 0;

    // Looking for a track
    for (const track of this._tracks) {
      totalLength += track._lengthInSec;
    }

    return totalLength;
  }

}

class Tracks {

  constructor(title, rating, lengthInSec) {

    // Print an error if rating and length is not a number
    if (isNaN(rating) || isNaN(lengthInSec)) {
      console.log("Please check if it's a number");
      return;
    }

    // Check if rating is from 0 to 5
    if (rating < 0 || rating > 5) {
      console.log("Please rate from 0 to 5");
      return;
    }

    this._title = title;
    this._rating = rating;
    this._lengthInSec = lengthInSec;
  }

}

/*======================================*/

// Declaring and defining variables
const library = new Library("Rock", "Eduardo");
const playlist1 = new Playlist("Best of Pearl Jam!")
const track1 = new Tracks("Alive", 5, 180);
const track2 = new Tracks("Jeremy", 4, 120);
const track3 = new Tracks("Black", 3, 210);
const track4 = new Tracks("Sunday Bloody Sunday", 5, 190);
const track5 = new Tracks("New Years Day", 4, 100);
const playlist2 = new Playlist("Best of U2!")

// Adding tracks/playlists
playlist1.addTracks(track1);
playlist1.addTracks(track2);
playlist1.addTracks(track3);
playlist2.addTracks(track4);
playlist2.addTracks(track5);
library.addPlaylist(playlist1);
library.addPlaylist(playlist2);

// Displaying library
console.log(library.toString());
console.log(`Playlist 1 - Overall Rating: ${playlist1.overallRating()} stars`);
console.log(`Playlist 1 - Total Duration: ${playlist1.totalDuration()} seconds`);
console.log('');
console.log(`Playlist 2 - Overall Rating: ${playlist2.overallRating()} stars`);
console.log(`Playlist 2 - Total Duration: ${playlist2.totalDuration()} seconds`);
