'use strict';

const express = require('express');
const path = require('path');
const app = express();

const staticFilesDir = path.join(__dirname, 'app/public');

app.get('/', function(req, res) {
    res.send('Hello debugger!')
});

app.use('/static', express.static(staticFilesDir));

app.listen(3000, () => console.log('Example app listening on port 3000!'));