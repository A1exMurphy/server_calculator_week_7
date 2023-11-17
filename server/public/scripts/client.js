// const { response } = require("../../server");

console.log('client.js is sourced!');

let operator = ""

onReady();
        //lets get a function that sets our initial state upon the DOM
function onReady() {
    console.log (`now we're cookin'`);
    getCalculations();
}
// onReady //we want all calculations to display upon page refresh


        //I need a GET route right away in order to call all calculations w/i onReady
function getCalculations() {
    console.log(`In GET route`)
    axios({
        method: `GET`,
        url: `/calculations`
    }).then((response) => {

        let calculations = response.data.calculations
        renderCalculations(calculations);

})
}

        //I need a function to determine the operator
        //ask about using class with event instead
function getOperator(event, op) {
    event.preventDefault();
    operator = op
    console.log(operator)
    return operator;
}

        //I need a function to collect inputs into an object
function createInputsObject(event) {
    console.log(`new object for calculation`);
    event.preventDefault()
    let firstNum = document.getElementById(`firstNum`).value
    let secondNum = document.getElementById(`secondNum`).value
    let newInputsObject = {
        numOne: Number(firstNum),
        numTwo: Number(secondNum),
        operator: operator,
    }
    requestCalculation(newInputsObject)
    console.log(newInputsObject)
}

        //I need a function to clear the input fields
function resetInputs() {
    console.log(`emptied the input fields`);
}

        //I need a function to POST InputsObject to server
function requestCalculation(newInputsObject) {
    console.log(`in POST route`)
    axios({
        method: `POST`,
        url: `/calculations`,
        data: newInputsObject
    }).then((response) => {
        console.log(`calculate this`, response.data)
        getCalculations()
        // render//insert function for DOM update(newCalculation);
    })
}

function renderCalculations(calculations) {
        document.getElementById(`resultHistory`).innerHTML = "";

                for(result of calculations) {
            document.getElementById(`resultHistory`).innerHTML +=
            `
            <li>${result.numOne}${result.operator}${result.numTwo}=${result.result}
            </li>
            `
            }
}