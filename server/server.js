console.log('server.js working');

const express = require('express');
const bodyParser = require('body-parser');

const mathRouter = require('./routes/math.router');

const app = express();

const PORT = 5000;

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/math', mathRouter);

app.listen(PORT, () => {
    console.log(`up and running port: ${PORT}`); 
});
