let num1 = 8;
let num2 = 2;
document.getElementById('num1-el').textContent = num1;
document.getElementById('num2-el').textContent = num2;
let answerEl = document.getElementById('answer-el');


function add(){
   addition = num1 + num2
   answerEl.textContent = answerEl.textContent + "" + addition;
    
}

function subtract(){
    subtraction = num1 - num2
    answerEl.textContent = answerEl.textContent + "" + subtraction;
}


function divide(){
    division = num1 / num2
    answerEl.textContent = answerEl.textContent + "" + division;
}


function multiply(){
    multiplication = num1 * num2
    answerEl.textContent = answerEl.textContent + "" + multiplication;
}

function clearEl(){
   answerEl.textContent = "Answer:";
   
}


