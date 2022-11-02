const express = require("express");
const apiRouter = express.Router();
const { v4: uuidv4 } = require("uuid");

let users = [
   {
      firstName: "Robbie",
      lastname: "Williams",
      city: "London",
   },
];

apiRouter.get("/", (req, res) => {
   res.status(200).send(users);
});

apiRouter.get("/:id", (req, res) => {
   const { id } = req.params;
   const findUser = users.filter((user) => {
      return user.id == id;
   });
   res.status(200).send(findUser);
});

apiRouter.post("/", (req, res) => {
   const user = req.body;

   const Id = uuidv4();
   const UserId = { ...user, id: Id };

   users.push(UserId);
   res.status(200).send(`User ${user.firstName} ${user.lastname} has been added.`);
});

apiRouter.delete("/:id", (req, res) => {
   const { id } = req.params;
   users = users.filter((user) => {
      return user.id != id;
   });
   res.status(200).send(`The user with id ${id} has been deleted.`);
});

apiRouter.patch("/:id", (req, res) => {
    const { id } = req.params;
    const { firstName, lastname, city } = req.body;
    const user = users.find( (user) => user.id == id )

    if (firstName) user.firstName = firstName;
    if (lastname) user.lastname = lastname;
    if (city) user.city = city;

    res.status(200).send(`User with the id ${id} has been modified.`)
        
})

module.exports = apiRouter;
