const express = require('express');
const apiRouter = express.Router();

// app.use( express.json() );

const users = [
    {
        firstName: 'Robbie',
        lastname: 'Williams',
        city: 'London',
    },
]

apiRouter.get('/', (req, res) => {
    res.send(users)
})

apiRouter.post('/', (req, res) => {
    const user = req.body;
    users.push(user);
    res.send(`User ${user.firstName} ${user.lastname} has been added.`)

})


module.exports = apiRouter;