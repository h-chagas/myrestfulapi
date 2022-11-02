const express = require('express');
const apiRouter = require('./routes/users');
const app = express();

app.use( express.json() );

//GET requests
app.use('/users', apiRouter);

app.get('/tshirt', (req, res) => {
    res.status(200).send({
        tshirt: "Yellow t-shirt",
        size: "L",
    })
})

app.post('/tshirt/:id', (req, res) => {
    const { id } = req.params;
    const { logo } = req.body;

    if (!logo) {
        res.status(418).send({ message: 'We need a logo!' })
    }

    res.send({
        tshirt: `This tshirt with your ${logo} and ID of ${id}`,

    })
})


module.exports = app;
