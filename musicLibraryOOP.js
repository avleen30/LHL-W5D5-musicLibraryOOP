class Library {

  constructor(name, creator) {
    this._name = name;
    this._creator = creator;
    this._playlists = [];
  }

  addPlaylist(aPlaylist) {
    this._playlists.push(aPlaylist);
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

    for (track of this._tracks) {
      totalRating += track._rating;
    }

    return totalRating / noOfTracks;
  }

  totalDuration() {
    let totalLength = 0;

    for (track of this._tracks) {
      totalLength += track.lengthInSec;
    }

    return totalLength;
  }

}

class Tracks {

  constructor(title, rating, lengthInSec) {

    if (isNaN(rating) || isNaN(length)) {
      throw new Error("Please check if it's a number");
    }
    if (rating < 0 || rating > 5) {
      throw new Error("Please rate from 0 to 5");
    }

    this._title = title;
    this._rating = rating;
    this._lengthInSec = lengthInSec;
  }

}


console.log(new Library("Rock", "eduardo"));
