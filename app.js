import express from "express";

import {
  deleteAstronautById,
  updateAstronautById,
  getAstronautsByName,
  replaceAstronautById,
  getAstronauts,
  createAstronaut,
  getAstronautById,
} from "./models/astronauts.js";

const app = express();

app.use(express.json());

/* Tasks

You have been asked to write the request handlers which manage the coordination of astronauts in outer space. All of the models that
retrieve and manage astronaut data have been written for you, and have been imported above. You must adhere to the principles of
RESTful API design throughout the tasks. Enter 'npm run dev' in your console to start the server. Test your request handlers using 
Postman.

All json responses for this tasks should follow the pattern:

res.json({
  "success": boolean,
  "payload": returnedData
})

*/

// Bonus Task (reworking Task 1 endpoint)

app.get("/astronauts", async function (req, res) {

  let astronauts = await getAstronautsByName(req.query);

  if (astronauts === undefined) {
    // compare if astronauts are there
    res.json({
      success: false,
      payload: astronauts,
    });
    return; 
  } else {
    // if all is there show them
    res.json({
      success: true,
      payload: astronauts,
    });
  }
});

// Task 2

/* Write a request handler to return the correct response and perform the correct action when a `POST` request is received to 
`/astronauts`. Choose the appropriate function from the imported functions at the top of the `app.js` to perform the action. */

// write request handler
//use create astronaut funtion


app.post("/astronauts", async function(req, res){
let newAstronaut = await createAstronaut(req.body)
console.log(newAstronaut);
res.json({
  "success": true,
  "payload": newAstronaut }) 
})  

// Task 3

/* Write the request handler to return the data from the function getAstronautById. Have this handler listen to requests at the 
appropriate path. */

// GET astronaut by ID
// getAstronautById()
// wants an ID
  //the user is gonna gimme that ID
//if getAstronautById() fails - it has an error message, i think it will return this
//if getAstronautById() succeeds - it will return an astronaut object

app.get("/astronauts/:id", async function(req, res) { //params
  let id = req.params.id;
  let astronaut = await getAstronautById(id);

  res.json(
    { 
      success: true,
      payload: astronaut 
    });
});


// Task 4

/* Write the request handler to perform the action and return the data from the function replaceAstronautById. Have this handler 
listen to requests at the appropriate path. */

app.put("/astronauts/:id", async (req, res) => {
  let id = req.params.id;
  let newAstronaut = req.body;

  res.json(
    {
      "success": true,
      "payload": await replaceAstronautById(id, newAstronaut)
    });

});

// Task 5

/* Write the request handler to perform the action and return the data from the function deleteAstronautById. Have this handler 
listen to requests at the appropriate path. */
app.delete("/astronauts/:id", async (req, res) => {
  res.json(
    {
      "success": true,
      "payload": await deleteAstronautById(req.params.id)
    }
  )
});


// Task 6

/* Write the request handler to perform the action and return the data from the function updateAstronautById. Have this handler 
listen to requests at the appropriate path. */
app.patch("/astronauts/:id", async (req, res) => {
  res.json({
    success: true,
    payload: await updateAstronautById(req.params.id, req.body)
  })
});


export default app;
