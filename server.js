const express = require("express");
const bodyParser = require("body-parser");
const CORS = require("cors");

const app = express();
const token =
  "ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98";

app.use(bodyParser.json());
app.use(CORS());

let tickets = [
    {
        id: 1,
        title: "Im a big problem",
        status: "open",
        description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem",
        attemptedSolutions: "I tried a whole buncha stuff man",
        category: "html",
        asker: "jeffrey real confused",
        timeCreated: 213,
        solution: null
    },
    {
        id: 2,
        title: "Im a second problem",
        status: "closed",
        description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem",
        attemptedSolutions: "I tried even more things ",
        category: "css",
        asker: "jeffrey real confused",
        timeCreated: 213,
        solution: {
            timeCreated: 92,
            body: "I solved this problem with my brain",
            answerer: "smarty pants guy"
        }
    }
];

let nextId = 3;

function authenticator(req, res, next) {
    const { authorization } = req.headers;
    if (authorization === token) {
      next();
    } else {
      res.status(403).json({ error: "User must be logged in to do that." });
    }
  }
  
  app.post("/api/login", (req, res) => {
    const { email, password } = req.body;
    if (email === "lambda" && password === "123456") {
      req.loggedIn = true;
      setTimeout(() => {
        res.status(200).json({
          payload: token
        });
      }, 1000);
    } else {
      res
        .status(403)
        .json({ error: "Email or Password incorrect. Please see Readme" });
    }
  });

  app.get("/api/tickets", authenticator, (req, res) => {
    res.send(tickets);
  });

  app.post("/api/tickets", authenticator, (req, res) => {
    if (req.body.ticket !== undefined && req.body.code !== undefined) {
      const newticket = req.body;
      newticket.id = nextId;
      tickets.push(newticket);
    }
    nextId = nextId + 1;
    res.status(201).json(tickets);
  });

  app.put("/api/tickets/:id", authenticator, (req, res) => {
    if (!req.params.id)
      res.status(400).send("Your request is missing the ticket id");
    if (req.body.id === undefined || !req.body.ticket || !req.body.code) {
      res
        .status(422)
        .send("Make sure your request body has all the fields it needs");
    }
    tickets = tickets.map(ticket => {
      if (`${ticket.id}` === req.params.id) {
        return req.body;
      }
      return ticket;
    });
    res.status(200).send(req.body);
  });

  app.delete("/api/tickets/:id", authenticator, (req, res) => {
    if (!req.params.id)
      res.status(400).send("Your request is missing the ticket id");
    tickets = tickets.filter(ticket => `${ticket.id}` !== req.params.id);
    res.status(202).send(req.params.id);
  });
  
  app.get("/", function(req, res) {
    res.send("App is working 👍");
  });
  
  app.listen(5001, () => {
    console.log("Server listening on port 5001");
  });