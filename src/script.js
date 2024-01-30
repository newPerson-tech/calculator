function calculate() {
    const firstNumber = parseFloat(document.getElementById('numberInput').value);
    const secondNumber = parseFloat(document.getElementById('numberTwoInput').value);

    const operation = document.getElementById('operation').value;
    const result = 0;

    switch (operation) {
        case 'addition':
            result = firstNumber + secondNumber;
            break;
        case 'substruction':
            result = firstNumber - secondNumber;
            break;
        case 'multiplication':
            result = firstNumber * secondNumber;
            break;
        case 'division':
            result = firstNumber / secondNumber;
            break;
        default:
            result = `Operation cannot be completed`;
    }

    document.getElementById('calculationOutcome').innerHTML = `Mathematical operation result:  ${result}`;

}