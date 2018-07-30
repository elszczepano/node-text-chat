import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import flash from 'connect-flash';
import session from 'express-session';
import routes from './routes/index';
import mongoose from 'mongoose';

const app = express();


//Setup db connection
mongoose.connect('mongodb://localhost/textchat');
let db = mongoose.connection;


//Check connection
db.once('open', function() {
   console.log('Connected');
});


//Check for DB errors
db.on('error', function(err) {
   console.log(err);
});


//Static files
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, '/public')));


//Setup extensions
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

app.use(session({
    secret: 'chat room',
    resave: false,
    saveUninitialized: true,
    cookie: {}
}));
app.use(flash());


//Setup router
app.use('/', routes);

app.use((req,res, next) => {
   res.status(404).render('404');
});

module.exports = app;

