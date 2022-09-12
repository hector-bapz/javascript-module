// import * as variables from "./js";
const myModal = document.querySelector("#winnerModal");
const modalBody = document.querySelector("#modalBody");
const modalTitle = document.querySelector("#modalTitle");
const closeModalX = document.querySelector("#closeModalX");
const closeModalBtn = document.querySelector("#closeModalBtn");
const reset = document.querySelector("#reset");
const select = document.querySelector("#selection");
const instruction = document.querySelector("#instruction");
const btns = document.querySelectorAll(".btn-ttt");
let currentPiece = "X";
let gameStarted = 0;
let xClass = "";
let oClass = "";

let game = {
  topLeft: "",
  topCenter: "",
  topRight: "",
  midLeft: "",
  midCenter: "",
  midRight: "",
  bottomLeft: "",
  bottomCenter: "",
  bottomRight: "",
};

select.addEventListener("change", () => {
  currentPiece = select.value;
});

reset.addEventListener("click", (event) => {
  resetEverything();
});

closeModalX.addEventListener("click", (event) => {
  myModal.classList.remove("show");
  myModal.removeAttribute("style");
  myModal.ariaHidden = false;
  myModal.removeAttribute("ariaModal");
  myModal.removeAttribute("role");
});

closeModalBtn.addEventListener("click", (event) => {
  myModal.classList.remove("show");
  myModal.removeAttribute("style");
  myModal.ariaHidden = false;
  myModal.removeAttribute("ariaModal");
  myModal.removeAttribute("role");
});

btns.forEach((button) => {
  button.addEventListener("click", clickbtn);
  button.addEventListener("mouseover", mouseOverBtn);
  button.addEventListener("mouseout", mouseOutBtn);
});

function clickbtn() {
  game[this.id] = currentPiece;
  setValue(this, "btn");
  selectValidate();
  isThereAWinner(this);
}

function mouseOverBtn() {
  setValue(this, "mouseover");
}

function mouseOutBtn() {
  resetClass(this, "mouseout");
  clickHappened(this);
}

function setValue(id, whoIsCalling) {
  if (id.getAttribute("data-clicked") === "false") {
    if (currentPiece === "O") {
      id.innerText = currentPiece;
      if (whoIsCalling === "btn") {
        id.setAttribute("data-clicked", "true");
        currentPiece = "X";
        id.classList.add("oValue");
      } else {
        id.classList.add("ghost--oValue");
      }
    } else {
      id.innerText = currentPiece;
      if (whoIsCalling === "btn") {
        id.setAttribute("data-clicked", "true");
        currentPiece = "O";
        id.classList.add("xValue");
      } else {
        id.classList.add("ghost--xValue");
      }
    }
  }
  // console.log(game);
}

function selectValidate(whoIsCalling) {
  if (select.hidden === false) {
    select.hidden = true;
    instruction.innerText = "Let's Game!";
  }
}

function clickHappened(element) {
  if (element.getAttribute("data-clicked") === "false") {
    element.innerHTML = "";
  }
}

function isThereAWinner() {
  if (game.topLeft === "X" && game.topCenter === "X" && game.topRight === "X") {
    setModal("X");
    resetEverything();
    console.log(game);
  } else if (
    game.midLeft === "X" &&
    game.midCenter === "X" &&
    game.midRight === "X"
  ) {
    setModal("X");
    resetEverything();
  } else if (
    game.bottomLeft === "X" &&
    game.bottomCenter === "X" &&
    game.bottomRight === "X"
  ) {
    setModal("X");
    resetEverything();
  } else if (
    game.topLeft === "X" &&
    game.midCenter === "X" &&
    game.bottomRight === "X"
  ) {
    setModal("X");
    resetEverything();
  } else if (
    game.topLeft === "X" &&
    game.midLeft === "X" &&
    game.bottomLeft === "X"
  ) {
    setModal("X");
    resetEverything();
  } else if (
    game.topCenter === "X" &&
    game.midCenter === "X" &&
    game.bottomCenter === "X"
  ) {
    setModal("X");
    resetEverything();
  } else if (
    game.topRight === "X" &&
    game.midRight === "X" &&
    game.bottomRight === "X"
  ) {
    setModal("X");
    resetEverything();
  } else if (
    game.topRight === "X" &&
    game.midCenter === "X" &&
    game.bottomLeft === "X"
  ) {
    setModal("X");
    resetEverything();
  } else if (
    game.topLeft === "O" &&
    game.topCenter === "O" &&
    game.topRight === "O"
  ) {
    setModal("O");
    resetEverything();
  } else if (
    game.midLeft === "O" &&
    game.midCenter === "O" &&
    game.midRight === "O"
  ) {
    setModal("O");
    resetEverything();
  } else if (
    game.bottomLeft === "O" &&
    game.bottomCenter === "O" &&
    game.bottomRight === "O"
  ) {
    setModal("O");
    resetEverything();
  } else if (
    game.topLeft === "O" &&
    game.midCenter === "O" &&
    game.bottomRight === "O"
  ) {
    setModal("O");
    resetEverything();
  } else if (
    game.topLeft === "O" &&
    game.midLeft === "O" &&
    game.bottomLeft === "O"
  ) {
    setModal("O");
    resetEverything();
  } else if (
    game.topCenter === "O" &&
    game.midCenter === "O" &&
    game.bottomCenter === "O"
  ) {
    setModal("O");
    resetEverything();
  } else if (
    game.topRight === "O" &&
    game.midRight === "O" &&
    game.bottomRight === "O"
  ) {
    setModal("O");
    resetEverything();
  } else if (
    game.topRight === "O" &&
    game.midCenter === "O" &&
    game.bottomLeft === "O"
  ) {
    setModal("O");
    resetEverything();
  } else if (
    game.topLeft !== "" &&
    game.topCenter !== "" &&
    game.topRight !== "" &&
    game.midLeft !== "" &&
    game.midCenter !== "" &&
    game.midRight !== "" &&
    game.bottomLeft !== "" &&
    game.bottomCenter !== "" &&
    game.bottomRight !== ""
  ) {
    setModal("");
    resetEverything();
  }
}

function setModal(winner) {
  myModal.classList.add("show");
  myModal.style.display = "block";
  myModal.ariaHidden = true;
  myModal.ariaModal = true;
  myModal.role = "dialog";
  modalTitle.innerHTML = "🎉 ¡Tenemos un Ganador! 🎉";
  if (winner !== "") modalBody.innerText = `EL GANADOR ES: ${winner}! 🎉`;
  else {
    modalTitle.innerHTML = "😱 ¡Empate! 😱";
    modalBody.innerText = "Intentemos de nuevo 😉";
  }
}

function resetEverything() {
  if (select.hidden === true) {
    select.hidden = false;
    instruction.innerText = "Select your piece!";
    currentPiece = select.value;
  }

  btns.forEach((button) => {
    button.innerText = "";
    resetClass(button, "reset");
    button.setAttribute("data-clicked", "false");
  });

  for (let item in game) {
    game[item] = "";
  }
}

function resetClass(element, whoIsCalling) {
  if (whoIsCalling === "reset") {
    xClass = "xValue";
    oClass = "oValue";
  } else {
    xClass = "ghost--xValue";
    oClass = "ghost--oValue";
  }
  for (let item in element.classList) {
    if (element.classList[item] == xClass) {
      element.classList.remove(xClass);
    } else if (element.classList[item] == oClass) {
      element.classList.remove(oClass);
    }
  }
}
