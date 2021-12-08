[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-f059dc9a6f8d3a56e377f745f24479a46679e63a5d9fe6f495e02850cd0d8118.svg)](https://classroom.github.com/online_ide?assignment_repo_id=6551419&assignment_repo_type=AssignmentRepo)
# RESTful API Workshop

You have been asked to write the request handlers which manage the coordination of astronauts in outer space. All of the models that
retrieve and manage astronaut data have been written for you, and have been imported into app.js. You must adhere to the principles of
RESTful API design throughout the tasks. Enter 'npm run dev' in your console to start the server. Test your request handlers using
Postman. Write all of your request handlers in app.js.

All json responses for this tasks should follow the pattern:

res.json({
"success": boolean,
"payload": returnedData
})

## Task 1 - GET Request

Write a request handler to return the correct response when a `GET` request is received to `/astronauts`.
Choose the appropriate function from the imported functions at the top of the `app.js` to get your data.

## Task 2 - POST request

Write a request handler to return the correct response and perform the correct action when a `POST` request is received to `/astronauts`. Choose the appropriate function from the imported functions at the top of the `app.js` to perform the action.

## Task 3 - GET astronaut by ID

Write the request handler to return the data from the function getAstronautById. Have this handler listen to requests at the appropriate path.

## Task 4 - PUT astronaut by ID

Write the request handler to perform the action and return the data from the function replaceAstronautById. Have this handler listen to requests at the appropriate path.

## Task 5 - DELETE astronaut by ID

Write the request handler to perform the action and return the data from the function deleteAstronautById. Have this handler listen to requests at the appropriate path.

## Task 6 PATCH astronaut by ID

Write the request handler to perform the action and return the data from the function updateAstronautById. Have this handler listen to requests at the appropriate path.

## BONUS

### GET astronaut by name

Modify your program to use a [query](https://masteringjs.io/tutorials/express/query-parameters) to handle `GET` requests is received to `/astronauts?name=<name>`. Add the functionality to your existing GET request handler.

### Error Handling

What would happen if someone tried to request an astronaut not in the database? Start thinking about how you'd handle this in your code in each route.
