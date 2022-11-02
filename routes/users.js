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
   res.send(users);
});

apiRouter.get("/:id", (req, res) => {
   const { id } = req.params;
   const findUser = users.filter((user) => {
      return user.id == id;
   });
   res.send(findUser);
});

apiRouter.post("/", (req, res) => {
   const user = req.body;

   const Id = uuidv4();
   const UserId = { ...user, id: Id };

   users.push(UserId);
   res.send(`User ${user.firstName} ${user.lastname} has been added.`);
});

apiRouter.delete("/:id", (req, res) => {
   const { id } = req.params;
   users = users.filter((user) => {
      return user.id != id;
   });
   res.send(`The user with id ${id} has been deleted.`);
});

module.exports = apiRouter;
