const mongoose = require('mongoose');
const URI = 'mongodb+srv://alex:alexito2012@curso-platzi.9ocqy.mongodb.net/Curso-Platzi?retryWrites=true&w=majority';

mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err));

module.exports = mongoose;