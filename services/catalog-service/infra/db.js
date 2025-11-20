const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const dbFile = path.join(__dirname, '../../catalog.db');

const db = new sqlite3.Database(dbFile, (err) => {
  if (err) console.error('DB open error', err);
});

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS tracks (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    artistId TEXT NOT NULL,
    albumId TEXT,
    genre TEXT,
    createdAt TEXT,
    updatedAt TEXT
  )`);
});

module.exports = db;
