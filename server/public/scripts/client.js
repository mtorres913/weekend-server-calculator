
let mathOperator
function getOperator(event) {
    mathOperator = event.target.value
    console.log(mathOperator)
}
function getMath() {
    //Axios GET request
    axios.get('/math').then((response) => {
        //Code that will run on a successful response
        //from the server.
        console.log(response);
        //quotesFromServer will be an array of quotes
        let mathFromServer = response.data;
        let contentDiv = document.querySelector('#content');
        contentDiv.innerHTML = '';
        //Loop over array of quotes and append to the DOM
        for (let math of mathFromServer) {
            contentDiv.innerHTML += `
            <p>${(math.math1.math.number1)} ${math.math2.math.mathOperator}  ${math.math3.math.number2} = ${math.math4.result}</p>
        `
        }
    }); //ALWAYS add .catch
}  


function submitForm(event) {
    //stop page from refreshing
    event.preventDefault();
    console.log("In submitForm function")
    let number1 = document.querySelector('#number1').value
    let number2 = document.querySelector('#number2').value
    console.log('Inputs ', number1, mathOperator, number2)
    let mathForServer = {
        number1,
        mathOperator,
        number2,
    };
    // type     url         data to send        
    axios.post('/math', mathForServer).then((response) => {
        getMath();
    }).catch((error) => {
        console.log(error);
        alert('Something went wrong.');
    })

}

function clearInput(event) {
    document.querySelector('#number1').value = '';
    document.querySelector('#number2').value = '';
}