document.getElementById('btn-deposit').addEventListener('click', function(){
    const newDepositAmount = getInputFieldValueById('deposit-field');
    const previousDepositAmount = getTextElementValueById('deposit-total');
    const depositTotal = newDepositAmount + previousDepositAmount;
    setTextElementValueById('deposit-total', depositTotal);

    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById('balance-total', newBalanceTotal);
})