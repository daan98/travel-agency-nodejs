import express from 'express';
import db from './config/db.js';
import router from './routes/index.js'; // USE EXACT PATH TO AVOID ERRORS

const app = express();

// CONNECTING TO THE DATABASE
db.authenticate()
  .then( () => console.log('CONNECTED TO DATABASE') )
  .catch( error => console.log(error) );

// DEFINING PORT
const port = process.env.PORT || 4000;

// ADDING PUG
app.set('view engine', 'pug')

// OBTAINING ACTUAL YEAR
app.use( (req, res, next) => {
    const year = new Date().getFullYear();

    res.locals.year = year;
    res.locals.pageTitle = 'Agencia de viajes';
    next();
});

// DEFINING PUBLIC FOLDER
app.use(express.static('public'))

// ADDING ROUTER
app.use('/', router);

app.listen(port, () => {
    console.log(`SERVER LISTENING ON PORT: http://localhost:${port}`);
});