const express = require('express');
const morgan = require('morgan');
const path = require('path');
const errorMiddleware = require('./app/middleware/errors')

const { mongoose } = require('./database');

const app = express();

//Settings
app.set('port', process.env.PORT || 4000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());



//Routes
app.use('/api/task', require('./routes/task.routes'));

app.use(errorMiddleware);

//Static files
app.use(express.static(path.join(__dirname, 'public')))

//start the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});