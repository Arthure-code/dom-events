// The read-only field takes focus, then every key pressed is shown through
// its key property: "a", "Enter", "ArrowLeft"...
const keyField = document.getElementById("keyField");
const pressedKey = document.getElementById("pressedKey");

keyField.addEventListener("keydown", (e) => {
  e.preventDefault();
  pressedKey.textContent = e.key === " " ? "Space" : e.key;
});
