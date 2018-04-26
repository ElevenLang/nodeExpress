var express = require('express');
var app = express();
var browserSync = require('browser-sync');
app.use(express.static('public'));



browserSync.create().init({
    files: ["public/*.html", "public/css/*.css"],
    proxy: "localhost:3000"
});

app.get('/', function (req, res) {
    res.send('hello');
});
app.listen(3000);