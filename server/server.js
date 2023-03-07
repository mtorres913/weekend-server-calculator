// Require express
const express = require('express');

const app = express();
// Heroku assigns us a unique PORT
// Use 5001 for localhost development
const port = process.env.PORT || 5003;

let mathHistory = [];

//Allow req.body
//Any reference to body-parser can be ignored
app.use(express.json())
// GET request returns information
//localhost:5003/quotes
app.get('/math', (req, res)=> {
    console.log('Get Request made for /quotes')
     //Send back the list of quotes!
    res.send(quoteList);
});
//POST request save user input
app.post('/math', (req, res)=> {
    console.log('POST request made for /quotes');
    //Any data we send from the client is available
    //as a property of req.body
    console.log(req.body);
    let quoteToAdd = req.body;
    quoteList.push(quoteToAdd);
    res.sendStatus(201); //Success!
});

// Look here for files
app.use(express.static('server/public'));

// Listen for requests for files
app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});



