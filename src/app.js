let theme = document.querySelector(".style");
let checked = JSON.parse(localStorage.getItem("swap"));
if (localStorage.getItem("swap")) {
  ch = JSON.parse(localStorage.getItem("swap"));
  if (ch == true) {
    theme.href = "newStyle.css";
  }
}

swich.addEventListener("change", () => {
  swap();
  save();
});

function swap() {
  if (document.getElementById("swap").checked == true) {
    theme.href = "newStyle.css";
  } else {
    theme.href = "style.css";
  }
}

function save() {
  localStorage.setItem("swap", swich.checked);
}

playButton.addEventListener("click", () => {
  playGame();
});

reSetButton.addEventListener("click", () => {
  reSet();
});
