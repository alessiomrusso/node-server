/**
 * Starting point of the application
 */

 const express = require('express');
 const http = require('http');
 const bodyParser = require('body-parser');
 const morgan = require('morgan');
 const mongoose = require('mongoose');

 const app = express();
 const router = require('./router');
 const config = require('./config');

 /*
  * DB Setup
  */
  const dbString = `mongodb://${config.db.username}:${config.db.password}@${config.db.host}/${config.db.database}`;
  mongoose.connect(dbString);

 /** 
  * Arguments passed to app.use() are registered as middlewares. 
  * Any incoming request is going to pass into every middleware by default.
  */
 app.use(morgan('combined'));
 // bodyParser middleware is going to parse any incoming request of any type into json.
 app.use(bodyParser.json({
     type: '*/*'
 }));
 router(app);

 // Server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);