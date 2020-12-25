const express = require('express');
const http = require('http');
const enforce = require('express-sslify');

const app = express();

app.use(enforce.HTTPS({trustProtoHeader: true}));

const PORT = process.env.PORT || 3000;

// static files

// body parser

app.use(express.urlencoded({extended:false}));
app.use(express.json());

require('dotenv').config();

app.use('/', require('./routes/index'));

http.createServer(app).listen(PORT, function(){

});
