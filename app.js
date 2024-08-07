const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

//function of the input list and button
function addTask(){
    if(inputBox.value === ''){
        alert("Please write something!")
    }
    else{
        listContainer.innerHTML += `<li>${inputBox.value}<span>\u00d7</span></li>`;
    }
    inputBox.value = "";
    saveData();
};

//button click function includes deleting and checking and unchecking completed tasks
listContainer.addEventListener("click", e => {
    const { target } = e;

    if (target.matches("li")) {
        target.classList.toggle("checked");
    } else if (target.matches("span")) {
        target.parentElement.remove();
    }
    saveData();
});

//Storage of data
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

//Storage on the browser
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();