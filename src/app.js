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
  numTryFocus = document.querySelector('#numTry')
  numTryFocus.focus()
});

reSetButton.addEventListener("click", () => {
  reSet()
  minFocus = document.querySelector('#min')
  minFocus.focus()
});