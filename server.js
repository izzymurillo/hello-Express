/* THIS IS THE ENTIRE SERVER!!! */

/* Imports are DIFFERENT than in React */
/* Below are IMPORTS */
/* Common JS Import Syntax */
const express = require("express");
const app = express(); /* CONSTRUCTOR */

const gizmos = [
  {
    id: 1,
    name: "gizmo 1",
  },
  {
    id: 2,
    name: "gizmo 2",
  },
];

app.use(express.json())
// body parser - we can take in JSON format & parse JSON

// req is short for request
// res is short for response
// middleware, route and controller
app.get("/api", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

// React Axios.get(http://localhost:8000/api/gizmos)
app.get("/api/gizmos", (req, res) => {
  res.json(gizmos);
  // ^^ How we send back response in JSON //
});

app.post("/api/gizmos", (req, res) => {
  const newGizmo = {
    id: gizmos.length + 1,
    name: req.body.name + " " + (gizmos.length + 1)
  }
  
  gizmos.push(newGizmo);
  // ^^ created a new gizmo & added it to our database
  res.status(201).json(gizmos[gizmos.length-1])
  // ^^ 201 status means something was created
  })

const server = app.listen(8000, () =>
  console.log(`Server is listening on port ${server.address().port}!`)
);
