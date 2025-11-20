class Track {
  constructor(id, title, artistId, albumId = null, genre = null, createdAt = null, updatedAt = null) {
    this.id = id;
    this.title = title;
    this.artistId = artistId;
    this.albumId = albumId;
    this.genre = genre;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
module.exports = Track;
