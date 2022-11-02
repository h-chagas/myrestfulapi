const express = require('express');
const apiRouter = express.Router();
const { v4: uuidv4 } = require('uuid');

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

    const Id = uuidv4();
    const UserId={...user, id: Id};

    users.push(UserId);
    res.send(`User ${user.firstName} ${user.lastname} has been added.`)


})


module.exports = apiRouter;