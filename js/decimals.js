// The chosen number is shown with exactly two decimals. toFixed rounds and
// pads: 5.1167 gives 5.12, 6 gives 6.00.
const numberSelect = document.getElementById("numberSelect");
const convertedNumber = document.getElementById("convertedNumber");

numberSelect.addEventListener("change", () => {
  convertedNumber.textContent = Number(numberSelect.value).toFixed(2);
});
