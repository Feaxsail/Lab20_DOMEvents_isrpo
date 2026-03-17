console.log(document)
const title = document.getElementById("title");
const text = document.querySelector(".text");
console.log(title);
console.log(text);

title.textContent = "DOM изменён через JS!";

title.style.color = "blue";
title.style.backgroundColor = "#f0f0f0";
title.style.padding = "10px";

text.style.fontSize = "18px";
text.style.fontStyle = "italic";
text.style.color = "darkgreen";

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
   
    alert("Кнопка нажата!");
    
    btn.style.backgroundColor = "#4CAF50"; 
    btn.style.color = "white";             
});

const nameInput = document.getElementById("nameInput");
const greetBtn = document.getElementById("greetBtn");
const output = document.getElementById("output");

greetBtn.addEventListener("click", () => {

    if (nameInput.value !== "") {
   
        output.textContent = `Привет, ${nameInput.value}!`;
        output.style.color = "black"; 
    } else {
      
        output.textContent = "Ошибка: Введите имя!";
        output.style.color = "red";
    }
});