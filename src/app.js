import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import flash from 'connect-flash';
import session from 'express-session';
import routes from './routes/index';

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, '/public')));

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

app.use('/', routes);

app.use((req,res, next) => {
   res.status(404).redirect('/');
});

module.exports = app;

