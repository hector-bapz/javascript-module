// import * as variables from "./js";
const myModal = document.querySelector("#winnerModal");
const modalBody = document.querySelector("#modalBody");
const modalTitle = document.querySelector("#modalTitle");
const closeModalX = document.querySelector("#closeModalX");
const closeModalBtn = document.querySelector("#closeModalBtn");
const reset = document.querySelector("#reset");
const select = document.querySelector("#selection");
const instruction = document.querySelector("#instruction");
let currentPiece = "X";
let gameStarted = 0;
let xClass = "";
let oClass = "";

const btns = document.querySelectorAll(".btn-ttt");

function selectValidate(element, id) {
  // console.log(element);
  if (id === "btn") {
    if (select.hidden === false) {
      select.hidden = true;
      instruction.innerText = "Let's Game!";
    }
  } else {
    if (select.hidden === true) {
      select.hidden = false;
      instruction.innerText = "Select your piece!";
      // resetClass(element, "reset");
      element.setAttribute("data-clicked", "false");
      currentPiece = select.value;
    }
  }
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
  console.log(game);
}

// function resetClass(id, whoIsCalling) {
//   if (whoIsCalling === "reset") {
//     xClass = "xValue";
//     oClass = "oValue";
//   } else {
//     xClass = "ghost--xValue";
//     oClass = "ghost--oValue";
//   }
//   for (let item in id.classList) {
//     if (id.classList[item] == xClass) {
//       id.classList.remove(xClass);
//     } else if (id.classList[item] == oClass) {
//       id.classList.remove(oClass);
//     }
//   }
// }

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

function isThereAWinner(element) {
  if (game.topLeft === "X" && game.topCenter === "X" && game.topRight === "X") {
    setModal("X");
    console.log(element);
    selectValidate(element, "reset");
  } else if (
    game.midLeft === "X" &&
    game.midCenter === "X" &&
    game.midRight === "X"
  ) {
    setModal("X");
    selectValidate("reset");
  } else if (
    game.bottomLeft === "X" &&
    game.bottomCenter === "X" &&
    game.bottomRight === "X"
  ) {
    setModal("X");
    selectValidate("reset");
  } else if (
    game.topLeft === "X" &&
    game.midCenter === "X" &&
    game.bottomRight === "X"
  ) {
    setModal("X");
    selectValidate("reset");
  } else if (
    game.topLeft === "X" &&
    game.midLeft === "X" &&
    game.bottomLeft === "X"
  ) {
    setModal("X");
    selectValidate("reset");
  } else if (
    game.topCenter === "X" &&
    game.midCenter === "X" &&
    game.bottomCenter === "X"
  ) {
    setModal("X");
    selectValidate("reset");
  } else if (
    game.topRight === "X" &&
    game.midRight === "X" &&
    game.bottomRight === "X"
  ) {
    setModal("X");
    selectValidate("reset");
  } else if (
    game.topRight === "X" &&
    game.midCenter === "X" &&
    game.bottomLeft === "X"
  ) {
    setModal("X");
    selectValidate("reset");
  } else if (
    game.topLeft === "O" &&
    game.topCenter === "O" &&
    game.topRight === "O"
  ) {
    setModal("O");
    selectValidate("reset");
  } else if (
    game.midLeft === "O" &&
    game.midCenter === "O" &&
    game.midRight === "O"
  ) {
    setModal("O");
    selectValidate("reset");
  } else if (
    game.bottomLeft === "O" &&
    game.bottomCenter === "O" &&
    game.bottomRight === "O"
  ) {
    setModal("O");
    selectValidate("reset");
  } else if (
    game.topLeft === "O" &&
    game.midCenter === "O" &&
    game.bottomRight === "O"
  ) {
    setModal("O");
    selectValidate("reset");
  } else if (
    game.topLeft === "O" &&
    game.midLeft === "O" &&
    game.bottomLeft === "O"
  ) {
    setModal("O");
    selectValidate("reset");
  } else if (
    game.topCenter === "O" &&
    game.midCenter === "O" &&
    game.bottomCenter === "O"
  ) {
    setModal("O");
    selectValidate("reset");
  } else if (
    game.topRight === "O" &&
    game.midRight === "O" &&
    game.bottomRight === "O"
  ) {
    setModal("O");
    selectValidate("reset");
  } else if (
    game.topRight === "O" &&
    game.midCenter === "O" &&
    game.bottomLeft === "O"
  ) {
    setModal("O");
    selectValidate("reset");
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
    selectValidate("reset");
  }
}

function clickHappened(id) {
  if (id.getAttribute("data-clicked") === "false") {
    id.innerHTML = "";
  }
}

select.addEventListener("change", () => {
  currentPiece = select.value;
});

btns.forEach((button) => {
  button.addEventListener("click", clickbtn);
  // button.addEventListener('mouseover', );
});

function clickbtn() {
  game[this.id] = currentPiece;
  setValue(this, "btn");
  selectValidate(this, "btn");
  isThereAWinner(this);
}

// topLeft.addEventListener("click", (event) => {
//   setValue(event.target, "btn");
//   selectValidate("btn");
//   isThereAWinner();
// });

// topLeft.addEventListener("mouseover", (event) => {
//   setValue(event.target, "mouseover");
// });

// topLeft.addEventListener("mouseout", (event) => {
//   resetClass(event.target, "mouseout");
//   clickHappened(event.target);
// });

// topCenter.addEventListener("click", (event) => {
//   setValue(event.target, "btn");
//   selectValidate("btn");
//   isThereAWinner();
// });
// topCenter.addEventListener("mouseover", (event) => {
//   setValue(event.target, "mouseover");
// });

// topCenter.addEventListener("mouseout", (event) => {
//   resetClass(event.target, "mouseout");
//   clickHappened(event.target);
// });

// topRight.addEventListener("click", (event) => {
//   setValue(event.target, "btn");
//   selectValidate("btn");
//   isThereAWinner();
// });
// topRight.addEventListener("mouseover", (event) => {
//   setValue(event.target, "mouseover");
// });

// topRight.addEventListener("mouseout", (event) => {
//   resetClass(event.target, "mouseout");
//   clickHappened(event.target);
// });

// midLeft.addEventListener("click", (event) => {
//   setValue(event.target, "btn");
//   selectValidate("btn");
//   isThereAWinner();
// });
// midLeft.addEventListener("mouseover", (event) => {
//   setValue(event.target, "mouseover");
// });

// midLeft.addEventListener("mouseout", (event) => {
//   resetClass(event.target, "mouseout");
//   clickHappened(event.target);
// });

// midCenter.addEventListener("click", (event) => {
//   setValue(event.target, "btn");
//   selectValidate("btn");
//   isThereAWinner();
// });
// midCenter.addEventListener("mouseover", (event) => {
//   setValue(event.target, "mouseover");
// });

// midCenter.addEventListener("mouseout", (event) => {
//   resetClass(event.target, "mouseout");
//   clickHappened(event.target);
// });

// midRight.addEventListener("click", (event) => {
//   setValue(event.target, "btn");
//   selectValidate("btn");
//   isThereAWinner();
// });
// midRight.addEventListener("mouseover", (event) => {
//   setValue(event.target, "mouseover");
// });

// midRight.addEventListener("mouseout", (event) => {
//   resetClass(event.target, "mouseout");
//   clickHappened(event.target);
// });

// bottomLeft.addEventListener("click", (event) => {
//   setValue(event.target, "btn");
//   selectValidate("btn");
//   isThereAWinner();
// });
// bottomLeft.addEventListener("mouseover", (event) => {
//   setValue(event.target, "mouseover");
// });

// bottomLeft.addEventListener("mouseout", (event) => {
//   resetClass(event.target, "mouseout");
//   clickHappened(event.target);
// });

// bottomCenter.addEventListener("click", (event) => {
//   setValue(event.target, "btn");
//   selectValidate("btn");
//   isThereAWinner();
// });
// bottomCenter.addEventListener("mouseover", (event) => {
//   setValue(event.target, "mouseover");
// });

// bottomCenter.addEventListener("mouseout", (event) => {
//   resetClass(event.target, "mouseout");
//   clickHappened(event.target);
// });

// bottomRight.addEventListener("click", (event) => {
//   setValue(event.target, "btn");
//   selectValidate("btn");
//   isThereAWinner();
// });
// bottomRight.addEventListener("mouseover", (event) => {
//   setValue(event.target, "mouseover");
// });

// bottomRight.addEventListener("mouseout", (event) => {
//   resetClass(event.target, "mouseout");
//   clickHappened(event.target);
// });

reset.addEventListener("click", (event) => {
  selectValidate("reset");
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
