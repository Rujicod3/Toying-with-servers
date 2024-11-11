
const express = require('express')

const app = express()

app.use(express.json()) // Required!
app.use(
    express.static('server/public') // localhost://5001 (GET)





/// ----- How to setup a server:

// ! 1. Require in the express package.
// Require express - gives us a function
const express = require('express')

// ! 2. Intialize by storing in a variable what the express function returns.
// Create an instance of express by calling the function returned above - gives us an object
const app = express()
const port = 5000

// ! 3. Allows the server to serve our static files from the public folder.
// ! Configure server to work with JSON
    // !This is the "Body Parser for json data". With out it req.body wont exist.
// express static file serving - public is the folder name
app.use(express.static('server/public'));

// Start up our server
app.listen(port, () => {
  console.log('listening on port', port);
});
// The .listen method is being given two things -- one is the PORT we want to listen on, 
//the second is... a function!