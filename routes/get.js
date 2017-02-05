'use strict';

var routes = require('express').Router();
// var DocumentClient = require('documentdb').DocumentClient;

// var host = process.env.documentDBEndpoint;
// var masterKey = process.env.documentDBSecret;
// var collectionUrl = process.env.documentDBCollectionUrl;


routes.get('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json('{"it": "works"}');
});

// routes.get('/booking', (req, res) => {

//     var client = new DocumentClient(host, { masterKey: masterKey });
//     return new Promise((resolve, reject) => {
//         client.queryDocuments(collectionUrl, 'SELECT * FROM sbmessages')
//             .toArray((err, results) => {
//                 if (err) {
//                     console.log(err);
//                     res.status(500);
//                 }
//                 else {                    
//                     for (var queryResult of results) {
//                         let resultString = JSON.stringify(queryResult);
//                     }
//                     console.log('DocumentDB queried succesfull. ' + results.length + ' results found');
//                     res.setHeader('Content-Type', 'application/json');
//                     res.status(200).json(results);
//                 }
//             });
//     });
// });

module.exports = routes;