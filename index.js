const express = require('express');
const apiRouter = require('./routes/users');
const app = express();

app.use( express.json() );

//GET requests
app.use('/users', apiRouter);

app.all('/*', (req, res) => {
    res.status(404).send({msg: 'route not found'})
})


module.exports = app;
