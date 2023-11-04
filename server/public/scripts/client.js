const { response } = require("../../server");

console.log('client.js is sourced!');

        //lets get a function that sets our initial state upon the DOM
function onReady() {
    console.log (`now we're cookin'`);
    getCalculations;
}
onReady //we want all calculations to display upon page refresh


        //I need a GET route right away in order to call all calculations w/i onReady
function getCalculations() {
    axios({
        method: `GET`,
        url: `/calculations`,
    }).then((response) => 
    console.log(response.data);
    let calculations = response.data.calculations;
    document.getElementById(`resultsHistory`).innerHTML = calculations;
    )
}

        //I need a function to determine the operator
        //ask about using class with event instead
function getOperator(event) {
    event.preventDefault();
    let operator = document.getElementsByClassName(`operator`).value
    return operator;
    console.log(operator);
}
        //I need a function to collect inputs into an object
function createInputsObject(event) {
    console.log(`new object for calculation`);
    event.preventDefault()
    let firstNum = document.getElementById(`firstNum`).value
    let secondNum = document.getElementById(`secondNum`).value
    let newInputsObject = {
        numOne: firstNum,
        numTwo: secondNum,
        operator: operator,
    }
    return newInputsObject;
}

        //I need a function to clear the input fields
function resetInputs() {
    console.log(`emptied the input fields`);
}

        //I need a function to POST InputsObject to server
function requestCalculation() {
    axios({
        method: `POST`,
        url: `/calculations`,
        data: //variable object of inputs, operators, and results
    }).then((response) => {
        console.log(`calculate this`, response.data)
        let newCalculation = response.data;
        render//insert function for DOM update(newCalculation);
    })
}