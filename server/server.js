const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error:'Page not found.'
    });
});

app.get('/users', (req, res) => {
    res.send([
            {name:'Amit', age:31}, {name:'John', age:45}, {name:'Jack', age:10}
        ]
    )
});

app.listen(3000);

module.exports.app = app;