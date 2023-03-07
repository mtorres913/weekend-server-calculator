
function submitForm(event){
    //stop page from refreshing
    event.preventDefault();
    console.log("In submitForm function")
    let number1 = document.querySelector('#number1').value
    let number2 = document.querySelector('#number2').value
    console.log('Inputs ', number1, number2)
    let mathForServer = {
        number1, number2, 
    };
    // type     url         data to send        
    axios.post('/math',mathForServer).then((response) => {
    }).catch((error) => {
        console.log(error);
        alert('Something went wrong.');
    })

}

function clearInput(event) {
    document.querySelector('#number1').value = '';
    document.querySelector('#number2').value = '';
}