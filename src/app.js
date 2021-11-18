
swich.addEventListener("click", () => {
  let theme = document.querySelector(".style");
  if (theme.getAttribute("href") == "style.css") {
    theme.href = "newStyle.css";
  } else {
    theme.href = "style.css";
  }
});

playButton.addEventListener("click", () => {
  playGame()
});

reSetButton.addEventListener("click", () => {
  reSet()
});

