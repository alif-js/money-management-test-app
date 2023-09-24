document.getElementById('btn-withdraw').addEventListener('click', function () {
    const newWithDrawAmount = getInputFieldValueById('withdraw-field');
    const previousWithdrawAmount = getTextElementValueById('withdraw-total');
    if (newWithDrawAmount > previousWithdrawAmount) {
        alert("Insufficient Balance");
    }
    else {
        const withdrawTotal = newWithDrawAmount + previousWithdrawAmount;
        setTextElementValueById('withdraw-total', withdrawTotal)
    }


    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal - newWithDrawAmount;
    setTextElementValueById('balance-total', newBalanceTotal);
})