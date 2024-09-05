function calculateTipAmount(billAmount, tipPercentage) {
    return billAmount * (tipPercentage / 100);
}

function calculateTotalAmount(billAmount, tipAmount) {
    return billAmount + tipAmount;
}

function calculatePerPersonAmount(totalAmount, numberOfPeople) {
    return totalAmount / numberOfPeople;
}


var calculateButton = document.getElementById("calculateButton");

calculateButton.addEventListener("click", function () {
   
    var billAmount = parseInt(document.getElementById("billAmount").value);
    var tipPercentage = parseInt(document.getElementById("tipPercentage").value);
    var numberOfPeople = parseInt(document.getElementById("numberOfPeople").value);

   
    if (isNaN(billAmount)
        || isNaN(tipPercentage)
        || isNaN(numberOfPeople)
        || billAmount <= 0
        || tipPercentage < 0
        || numberOfPeople <= 0) {
        alert("Пожалуйста, введите корректные значения.");
        return;
    }

  
    var tipAmount = calculateTipAmount(billAmount, tipPercentage);
    var totalAmount = calculateTotalAmount(billAmount, tipAmount);

    var perPersonAmount = calculatePerPersonAmount(totalAmount, numberOfPeople);

    document.getElementById("tipAmount").innerText = tipAmount.toFixed(2);
    document.getElementById("totalAmount").innerText = totalAmount.toFixed(2);
    document.getElementById("perPersonAmount").innerText = perPersonAmount.toFixed(2);
});