console.log('server.js working');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PORT = 5000;

app.get('/', (req, res) => {
    res.sendStatus(200);
});

app.listen(PORT, () => {
    console.log(`up and running port: ${PORT}`);
    
});