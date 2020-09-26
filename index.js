'use strict';

//require('dotenv').config();
//var path = require('path');
//var fs = require('fs');

var express = require('express');

var app = express();

const port = 80

app.listen(port, () => {
	console.log(`Listening http on port:${port}`)
  })