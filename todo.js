let Addtodo = document.getElementById("AddToDo");
let todocontainer = document.getElementById("toDoContainer");
let inputfield = document.getElementById("inputField");

Addtodo.addEventListener("click", function () {
  var paragraph = document.createElement("p");
  paragraph.classList.add("paragraph");
  paragraph.innerHTML = inputfield.value;
  todocontainer.appendChild(paragraph);
  inputfield.value = "";
  paragraph.addEventListener("click", function () {
    paragraph.style.textDecoration = "line-through";
  });
  paragraph.addEventListener("dblclick", function () {
    todocontainer.removeChild(paragraph);
  });
});
