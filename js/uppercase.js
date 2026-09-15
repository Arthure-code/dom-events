// The text is copied in capitals on every keystroke: the input event fires on
// every change of value, paste included.
const textField = document.getElementById("textField");
const uppercaseText = document.getElementById("uppercaseText");

textField.addEventListener("input", () => {
  uppercaseText.textContent = textField.value.toUpperCase();
});
