//My First JS Counter App!!!!!!!!!!!!!!!

let count = 0;
let countEl = document.getElementById('count-el');
let saveEl = document.getElementById("save-el");


function increment(){
    count += 1;
    countEl.textContent = count;
       
}

function save(){
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    countEl.textContent = 0; 
    count = 0 
}

let welcomeEl = document.getElementById("welcome-el");
let name = "Soji"
let greeting = "Welcome here"
welcomeEl.textContent = greeting + " " + name;











