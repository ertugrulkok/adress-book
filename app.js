const nameInput = document.getElementById("nameInput");
const numberInput = document.getElementById("numberInput");
const nameColumn = document.getElementById("name")
const phoneColumn = document.getElementById("phone")
const createBtn = document.getElementById("createBtn");
const deleteBtn = document.getElementById("deleteBtn");



createBtn.addEventListener("click", () => {
  const keyInput = nameInput.value;
  const valueInput = numberInput.value;

  if (keyInput && valueInput) {
    localStorage.setItem(keyInput, valueInput);
    location.reload();
    nameInput.value = "";
    numberInput.value = "";
  }
  console.log(localStorage.getItem(keyInput));
});

for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  const item = localStorage.getItem(key);
  const newName = document.createElement("li")
  nameColumn.append(newName)
  newName.innerHTML =`${key}`
  const newPhone = document.createElement("li")
  phoneColumn.append(newPhone)
  newPhone.innerHTML=`${item}`
}

deleteBtn.addEventListener("click", () => {
  localStorage.clear()
  location.reload();


})