let people = Number(prompt("Number of people?"));
let price = Number(prompt("Cost of food"));
let percent = Number(prompt("Percent"))
alert(`${price+(price*percent/100)/people}`)