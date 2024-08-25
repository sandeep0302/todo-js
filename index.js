function addTodo() {

   const inputElement = document.querySelector("input").value;
   const divElement = document.createElement("div");

   divElement.innerHTML = `<div>${inputElement}</div>`;
   divElement.classList.add("todo-item");


   const editButton = document.createElement("button");
   editButton.textContent = "Edit";
   editButton.addEventListener("click", editTodo);
   editButton.classList.add("edit");
   divElement.appendChild(editButton);

   const deleteButton = document.createElement("button");
   deleteButton.textContent = "Delete";
   deleteButton.addEventListener("click", deleteTodo);
   deleteButton.classList.add("delete-button");

   divElement.appendChild(deleteButton);
   document.querySelector("body").appendChild(divElement);
}

function editTodo(e) {

   const editItem = e.target.parentNode;
   if (e.target.textContent === "save") {

      const inputField = editItem.querySelector("input");
      const updatedText = inputField.value;
      inputField.classList.add("input-field");

      const newInputElement = document.createElement("div");
      newInputElement.textContent = updatedText;
      editItem.replaceChild(newInputElement, inputField);
      e.target.textContent = "Edit";
   } else {
      const currentText = editItem.querySelector("div").textContent;
      const inputField = document.createElement("input");
      inputField.type = "text";
      inputField.value = currentText;

      const textElement = editItem.querySelector("div");

      editItem.replaceChild(inputField, textElement);

      e.target.textContent = "save";
   }
}

function deleteTodo(event) {
   const todoItem = event.target.parentNode;
   todoItem.parentNode.removeChild(todoItem); s
}