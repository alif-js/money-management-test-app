function getInputFieldValueById(inputField) {
    const newInputAmount = document.getElementById(inputField);
    const newInputAmountString = newInputAmount.value;
    newInputAmount.value = '';
    return parseFloat(newInputAmountString);
}

function getTextElementValueById(textField){
    const previousTotal = document.getElementById(textField);
    const previousTotalString = previousTotal.innerText;
    return parseFloat(previousTotalString);
}

function setTextElementValueById(elementId, newValue){
    const total = document.getElementById(elementId);
    total.innerText = newValue;
}
