const userList = document.getElementById("userList");
const addUserBtn = document.getElementById("addUserBtn");
const newUserName = document.getElementById("newUserName");
const stats = document.getElementById("stats");

let userCount = 0;

function updateStats() {
    stats.textContent = `Всего пользователей: ${userCount}`;
}

addUserBtn.addEventListener("click", () => {
    const name = newUserName.value.trim();
    
  
    if (name === "") return;

   
    const li = document.createElement("li");

    const textNode = document.createTextNode(name);
    li.appendChild(textNode);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Удалить";
    deleteBtn.classList.add("delete-btn");


    li.appendChild(deleteBtn);

    userList.appendChild(li);

  
    userCount++;
    updateStats();

    newUserName.value = "";
    newUserName.focus();
});


userList.addEventListener("click", (event) => {
    
    if (event.target.classList.contains("delete-btn")) {
 
        event.target.parentElement.remove();
 
        userCount--;
        updateStats();
    }
});