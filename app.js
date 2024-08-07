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