var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var usersRouter = require('./routes/users');
var avatarRouter = require('./routes/avatar');
var khsRouter = require('./routes/khs');
var logRouter = require('./routes/log');
var mahasiswaRouter = require('./routes/mahasiswa');
var ninaRouter = require('./routes/nina');
var prodiRouter = require('./routes/prodi');
var metaverseRouter = require('./routes/metaverse');
var questsRouter = require('./routes/quests');

var app = express();

app.use(cors());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const db = require("./database/models");
db.sequelize.sync()
    .then(() => {
        console.log("Synced db.");
    })
    .catch((err) => {
        console.log("Failed to sync db: " + err.message);
    });

app.use('/users', usersRouter);
app.use('/metaverse', metaverseRouter);
app.use('/avatar', avatarRouter);
app.use('/khs', khsRouter);
app.use('/log', logRouter);
app.use('/mahasiswa', mahasiswaRouter);
app.use('/nina', ninaRouter);
app.use('/prodi', prodiRouter);
app.use('/quests', questsRouter);

app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;