import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/api');

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => {
  console.log('MongoDB connects!');
});

export default db;
