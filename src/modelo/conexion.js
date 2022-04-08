const db = require('mongoose');
const uri = 'mongodb+srv://glocate:SRQncgBTq9I5kLjq@cluster0.tmobt.mongodb.net/Geolocation?retryWrites=true&w=majority'
db.connect(uri)
.then(db => console.log('Db is connected'))
.catch(err => console.error(err))


module.export = db;


