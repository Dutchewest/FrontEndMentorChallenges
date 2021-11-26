const toggle = document.getElementById("toggle-el");
const amount = document.getElementById("amount-el");
const basic = document.querySelector('.bas-monthly');
const professional = document.querySelector('.pro-monthly');
const master = document.querySelector('.mas-monthly')
const dollar = document.querySelector('.dollar-sign');


//Monthly Prices variables decleared underneath
let basicMonthly = 19.99;
let professionalMonthly = 24.99;
let masterMonthly = 39.99;

// Annual Prices variable decleared underneath
let basicAnnual = 199.99;
let professionalAnnual = 249.99;
let masterAnnual = 399.99;

//Function codes starts here
//Function codes for montly prices starts here
const monthlyPrices = function() {
    basic.textContent = `${dollar.textContent}${basicMonthly}`;
    professional.textContent = `${dollar.textContent}${professionalMonthly}`;
    master.textContent = `${dollar.textContent}${masterMonthly}`; 
}
monthlyPrices();

//Function codes for annual prices starts here
const annualPrices = function(){
    basic.textContent = `${dollar.textContent}${basicAnnual}`;
    professional.textContent = `${dollar.textContent}${professionalAnnual}`;
    master.textContent = `${dollar.textContent}${masterAnnual}`
}


// Function to toggle the prices when toggled.
toggle.onclick = () => {
     toggle.classList.toggle('active') ? monthlyPrices() : annualPrices();
         
}



