// The box colour follows the window width: red under 600 px, green under
// 900, blue under 1200, none above. Computed once at load, then on resize.
const widthBox = document.getElementById("widthBox");
const windowWidth = document.getElementById("windowWidth");
const COLOURS = ["bg-danger", "bg-success", "bg-primary", "bg-secondary"];

function colourByWidth() {
  const width = window.innerWidth;

  windowWidth.textContent = width;
  widthBox.classList.remove(...COLOURS);

  if (width < 600) {
    widthBox.classList.add("bg-danger");
  } else if (width < 900) {
    widthBox.classList.add("bg-success");
  } else if (width < 1200) {
    widthBox.classList.add("bg-primary");
  } else {
    widthBox.classList.add("bg-secondary");
  }
}

window.addEventListener("resize", colourByWidth);
colourByWidth();
