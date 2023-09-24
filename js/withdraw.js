document.getElementById('btn-withdraw').addEventListener('click', function () {
    const newWithDrawAmount = getInputFieldValueById('withdraw-field');
    const previousWithdrawAmount = getTextElementValueById('withdraw-total');
    



    const previousBalanceTotal = getTextElementValueById('balance-total');

    if (newWithDrawAmount > previousBalanceTotal) {
        alert("Insufficient Balance");
        return;
    }

    const withdrawTotal = newWithDrawAmount + previousWithdrawAmount;
    setTextElementValueById('withdraw-total', withdrawTotal)

    const newBalanceTotal = previousBalanceTotal - newWithDrawAmount;
    setTextElementValueById('balance-total', newBalanceTotal);
})