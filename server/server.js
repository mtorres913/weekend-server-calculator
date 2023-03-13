// Require express
const express = require('express');

const app = express();
// Heroku assigns us a unique PORT
// Use 5001 for localhost development
const port = process.env.PORT || 5003;


let mathHistory = [];
let mathHistoryFinal = [];

//Allow req.body
//Any reference to body-parser can be ignored
app.use(express.json())
// GET request returns information
//localhost:5003/quotes
app.get('/math', (req, res) => {
    console.log('Get Request made for /math')
    //Send back the list of quotes!
    res.send(mathHistory);
});
//POST request save user input
app.post('/math', (req, res) => {
    console.log('POST request made for /math');
    //Any data we send from the client is available
    //as a property of req.body
    console.log(req.body);
    let mathToAdd = req.body;
    mathToAdd.answer = doMath(mathToAdd)
    mathHistory.push(mathToAdd);
    res.sendStatus(201); //Success!
});

// Look here for files
app.use(express.static('server/public'));

// Listen for requests for files
app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});

function doMath(math) {
        let result = 0
        if (math.mathOperator ==  '+' ) { // use + (addition) operator to add two numbers  
            result = Number(math.number1) + Number(math.number2);
        }
        else if (math.mathOperator == '-') { // use -  (subtraction) operator to subtract two numbers  
            result = Number(math.number1) - Number(math.number2);
        }
        else if (math.mathOperator == '*') { // use * (multiplication) operator to multiply two numbers  
            result =  Number(math.number1) * Number(math.number2);
        }
        else {
            result = Number(math.number1) / Number(math.number2); // use / (division) operator to divide two numbers  
        }
    return result;
}
