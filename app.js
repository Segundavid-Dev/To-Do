"use strict";

// getting selectors
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addTask = document.querySelector(".add-task");

// function handler to add task
addTask.addEventListener("click", function () {
  if (inputBox.value === "") {
    alert("you must write a task");
  } else {
    let li = document.createElement("li"); // create an li element
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li); // append li element to the end of the parent container
    let span = document.createElement("span"); // create span element
    span.innerHTML = "\u00d7"; // add the times symbol to the span
    li.appendChild(span); // append span elements to the li
  }
  inputBox.value = "";
  saveData();
});

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

// storing tasks in local storage
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

// display saved date in our browser when ever we refresh
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
