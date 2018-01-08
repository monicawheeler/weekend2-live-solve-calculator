const express = require('express');
const router = express.Router();
const Calculation = require('../models/Calculation');

const history = [];

router.get('/', (req, res) => {
    res.send(history);
});

router.post('/', (req, res) => {
    history.push(new Calculation(req.body.firstNumber, req.body.secondNumber, req.body.operation));
    res.sendStatus(200);
});

module.exports = router;