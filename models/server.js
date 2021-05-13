const express = require('express')
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        //this.server = require('http').createServer(this.app);
        this.pokemonPath = '/api/pokemon';
        this.imagesPath = '/api/images';
        this.thumbnailsPath = '/api/thumbnails';
        this.middlewares();
        this.routes();
       
    }

    routes() {
        this.app.use(this.pokemonPath, require('../routes/pokemon'));
        this.app.use(this.imagesPath, require('../routes/images'));
        this.app.use(this.thumbnailsPath, require('../routes/thumbnails'));
    }

    middlewares() {
        //CORS
        this.app.use(cors());
        //Lectura y parseo del body
        //this.app.use(express.json());
        //Directorio Público
        this.app.use(express.static('public'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server running in port ', this.port);
            });
    }


}

module.exports = Server;