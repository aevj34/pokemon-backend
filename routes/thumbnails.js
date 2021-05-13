var express = require('express');

var app = express();

const path = require('path');
const fs = require('fs');

app.get('/:img', (req, res, next) => {

    var img = req.params.img;
    var pathImagen;

    var pathThing = path.resolve(__dirname, `../assets/no-image.png`);

    if (!img)
        res.sendFile(pathThing);

    const zeroPad = (num, places) => String(num).padStart(places, '0')
    pathImagen = path.resolve(__dirname, `../thumbnails/${ zeroPad(img, 3) }.png`);

    if (fs.existsSync(pathImagen)) {
        res.sendFile(pathImagen);
    } else {
        res.sendFile(pathThing);
    }

});


module.exports = app;