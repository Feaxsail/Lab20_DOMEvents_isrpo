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

const clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click", () => {
  
    nameInput.value = "";
    output.textContent = "";
   
    nameInput.style.backgroundColor = "white";
    nameInput.focus(); 
});

const userForm = document.getElementById("userForm");
const formOutput = document.getElementById("formOutput");


userForm.addEventListener("submit", (event) => {
  
    event.preventDefault();

    const name = document.getElementById("formName").value;
    const age = document.getElementById("formAge").value;

    formOutput.textContent = `Пользователь: ${name}, Возраст: ${age}`;
    formOutput.style.color = "black";
});
