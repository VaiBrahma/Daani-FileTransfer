const mongoose = require('mongoose')
<<<<<<< HEAD
const mongoURI = 'mongodb://localhost:27017/'

const connectToMongo = ()=>{
   mongoose.connect(mongoURI,console.log('connected to mongodb'));
}

module.exports = connectToMongo;
=======

mongoose.connect('mongodb://localhost:27017');
>>>>>>> old_daani/main
