const request = require('request');
const apiKey = require('../config/keys');

const popular = (callback) => {
    const url = 'https://api.themoviedb.org/3/discover/movie?api_key=3cc15971287e868c0c4c2483393a872a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1';

    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to movie services!', undefined);
        } else if (body.results.length === 0) {
            callback("Looks like we can't find what you are looking for. Please try another search!", undefined);
        } else {
            callback(undefined, body.results);
        }
    });
}

module.exports = popular;