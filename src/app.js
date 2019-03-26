const path = require('path');
const express = require('express');
const hbs = require('hbs');
const popular = require('./utils/popular');

// Initialize express app
const app = express();
const port = process.env.PORT || 3000;

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const partialsPath = path.join(__dirname, '../templates/partials');
const viewsPath = path.join(__dirname, '../templates/views');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve 
app.use(express.static(publicDirectoryPath));

app.get('/', (req, res) => {
    res.render('index', {
        name: 'Kyle Berry',
        title: 'Movie Bunk'
    });
});

app.get('/discover/popular', (req, res) => {
    popular((error, data) => {
        if (error) {
            return res.send({
                error
            });
        }
        res.send({
            data
        });
    });
});

app.listen(port, () => {
    console.log('Server is up and running on port: ' + port);
});
