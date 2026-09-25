// backend.js
import express from "express";
import cors from "cors";
import userServices from "./models/user-services.js";

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", (req, res) => {
  const name = req.query.name;
  const job = req.query.job;
  userServices
    .getUsers(name, job)
    .then((result) => {
      res.send({users_list: result});
    })
    .catch((error) => {
      console.log(error);
    });
});

app.get("/users/:id", (req, res) => {
  const id = req.params["id"];
  userServices
    .findUserById(id)
    .then((result) => {
      if (result === null) {
        res.status(404).send("Not found");
      } else {
        res.send(result);
      }
    })
    .catch((error) => {
      console.log(error);
    });
});

app.post("/users", (req, res) => {
  const userToAdd = req.body;
  userServices.addUser(userToAdd).then((result) => {
      res.status(201).send(result);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.delete("/users/:id", (req, res) => {
  const id = req.params["id"];
  userServices
    .deleteUserById(id)
    .then((result) => {
      if (result === null) {
        res.status(404).send("Not found");
      } else {
        res.status(204).send();
      }
    })
    .catch((error) => {
      console.log(error);
    });
});

app.listen(port, () => {
  console.log(
    `App listening at http://localhost:${port}`
  );
});
