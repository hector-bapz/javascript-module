const topLeft = document.querySelector("#topLeft");
const topCenter = document.querySelector("#topCenter");
const topRight = document.querySelector("#topRight");
const midLeft = document.querySelector("#midLeft");
const midCenter = document.querySelector("#midCenter");
const midRight = document.querySelector("#midRight");
const bottomLeft = document.querySelector("#bottomLeft");
const bottomCenter = document.querySelector("#bottomCenter");
const bottomRight = document.querySelector("#bottomRight");
const reset = document.querySelector("#reset");
const select = document.querySelector("#selection");
const instruction = document.querySelector("#instruction");
const myModal = document.querySelector("#winnerModal");
const modalBody = document.querySelector("#modalBody");
const modalTitle = document.querySelector("#modalTitle");
const closeModalX = document.querySelector("#closeModalX");
const closeModalBtn = document.querySelector("#closeModalBtn");
let gameStarted = 0;
let currentPiece = "X";
let xClass = "";
let oClass = "";

function selectValidate(id) {
  if (id == "btn") {
    if (select.hidden === false) {
      select.hidden = true;
      instruction.innerText = "Let's Game!";
    }
  } else {
    if (select.hidden === true) {
      select.hidden = false;
      instruction.innerText = "Select your piece!";
      topLeft.innerText = "";
      topCenter.innerText = "";
      topRight.innerText = "";
      midLeft.innerText = "";
      midCenter.innerText = "";
      midRight.innerText = "";
      bottomLeft.innerText = "";
      bottomCenter.innerText = "";
      bottomRight.innerText = "";
      resetClass(topLeft, "reset");
      resetClass(topCenter, "reset");
      resetClass(topRight, "reset");
      resetClass(midLeft, "reset");
      resetClass(midCenter, "reset");
      resetClass(midRight, "reset");
      resetClass(bottomLeft, "reset");
      resetClass(bottomCenter, "reset");
      resetClass(bottomRight, "reset");
      topLeft.setAttribute("clicked", "false");
      topCenter.setAttribute("clicked", "false");
      topRight.setAttribute("clicked", "false");
      midLeft.setAttribute("clicked", "false");
      midCenter.setAttribute("clicked", "false");
      midRight.setAttribute("clicked", "false");
      bottomLeft.setAttribute("clicked", "false");
      bottomCenter.setAttribute("clicked", "false");
      bottomRight.setAttribute("clicked", "false");
      currentPiece = select.value;
    }
  }
}

function setValue(id, whoIsCalling) {
  if (id.getAttribute("clicked") === "false") {
    if (currentPiece === "O") {
      id.innerText = currentPiece;
      if (whoIsCalling === "btn") {
        id.setAttribute("clicked", "true");
        currentPiece = "X";
        id.classList.add("oValue");
      } else {
        id.classList.add("ghost--oValue");
      }
    } else {
      id.innerText = currentPiece;
      if (whoIsCalling === "btn") {
        id.setAttribute("clicked", "true");
        currentPiece = "O";
        id.classList.add("xValue");
      } else {
        id.classList.add("ghost--xValue");
      }
    }
  }
}

function resetClass(id, whoIsCalling) {
  if (whoIsCalling === "reset") {
    xClass = "xValue";
    oClass = "oValue";
  } else {
    xClass = "ghost--xValue";
    oClass = "ghost--oValue";
  }
  for (item in id.classList) {
    if (id.classList[item] == xClass) {
      id.classList.remove(xClass);
    } else if (id.classList[item] == oClass) {
      id.classList.remove(oClass);
    }
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

function isThereAWinner() {
  if (
    topLeft.innerText === "X" &&
    topCenter.innerText === "X" &&
    topRight.innerText === "X"
  ) {
    setModal("X");
    selectValidate("reset");
  } else if (
    midLeft.innerText === "X" &&
    midCenter.innerText === "X" &&
    midRight.innerText === "X"
  ) {
    setModal("X");
    selectValidate("reset");
  } else if (
    bottomLeft.innerText === "X" &&
    bottomCenter.innerText === "X" &&
    bottomRight.innerText === "X"
  ) {
    setModal("X");
    selectValidate("reset");
  } else if (
    topLeft.innerText === "X" &&
    midCenter.innerText === "X" &&
    bottomRight.innerText === "X"
  ) {
    setModal("X");
    selectValidate("reset");
  } else if (
    topLeft.innerText === "X" &&
    midLeft.innerText === "X" &&
    bottomLeft.innerText === "X"
  ) {
    setModal("X");
    selectValidate("reset");
  } else if (
    topCenter.innerText === "X" &&
    midCenter.innerText === "X" &&
    bottomCenter.innerText === "X"
  ) {
    setModal("X");
    selectValidate("reset");
  } else if (
    topRight.innerText === "X" &&
    midRight.innerText === "X" &&
    bottomRight.innerText === "X"
  ) {
    setModal("X");
    selectValidate("reset");
  } else if (
    topRight.innerText === "X" &&
    midCenter.innerText === "X" &&
    bottomLeft.innerText === "X"
  ) {
    setModal("X");
    selectValidate("reset");
  } else if (
    topLeft.innerText === "O" &&
    topCenter.innerText === "O" &&
    topRight.innerText === "O"
  ) {
    setModal("O");
    selectValidate("reset");
  } else if (
    midLeft.innerText === "O" &&
    midCenter.innerText === "O" &&
    midRight.innerText === "O"
  ) {
    setModal("O");
    selectValidate("reset");
  } else if (
    bottomLeft.innerText === "O" &&
    bottomCenter.innerText === "O" &&
    bottomRight.innerText === "O"
  ) {
    setModal("O");
    selectValidate("reset");
  } else if (
    topLeft.innerText === "O" &&
    midCenter.innerText === "O" &&
    bottomRight.innerText === "O"
  ) {
    setModal("O");
    selectValidate("reset");
  } else if (
    topLeft.innerText === "O" &&
    midLeft.innerText === "O" &&
    bottomLeft.innerText === "O"
  ) {
    setModal("O");
    selectValidate("reset");
  } else if (
    topCenter.innerText === "O" &&
    midCenter.innerText === "O" &&
    bottomCenter.innerText === "O"
  ) {
    setModal("O");
    selectValidate("reset");
  } else if (
    topRight.innerText === "O" &&
    midRight.innerText === "O" &&
    bottomRight.innerText === "O"
  ) {
    setModal("O");
    selectValidate("reset");
  } else if (
    topRight.innerText === "O" &&
    midCenter.innerText === "O" &&
    bottomLeft.innerText === "O"
  ) {
    setModal("O");
    selectValidate("reset");
  } else if (
    topLeft.innerText !== "" &&
    topCenter.innerText !== "" &&
    topRight.innerText !== "" &&
    midLeft.innerText !== "" &&
    midCenter.innerText !== "" &&
    midRight.innerText !== "" &&
    bottomLeft.innerText !== "" &&
    bottomCenter.innerText !== "" &&
    bottomRight.innerText !== ""
  ) {
    setModal("");
    selectValidate("reset");
  }
}

function clickHappened(id) {
  if (id.getAttribute("clicked") === "false") {
    id.innerHTML = "";
  }
}

select.addEventListener("change", () => {
  currentPiece = select.value;
});

topLeft.addEventListener("click", (event) => {
  setValue(event.target, "btn");
  selectValidate("btn");
  isThereAWinner();
});

topLeft.addEventListener("mouseover", (event) => {
  setValue(event.target, "mouseover");
});

topLeft.addEventListener("mouseout", (event) => {
  resetClass(event.target, "mouseout");
  clickHappened(event.target);
});

topCenter.addEventListener("click", (event) => {
  setValue(event.target, "btn");
  selectValidate("btn");
  isThereAWinner();
});
topCenter.addEventListener("mouseover", (event) => {
  setValue(event.target, "mouseover");
});

topCenter.addEventListener("mouseout", (event) => {
  resetClass(event.target, "mouseout");
  clickHappened(event.target);
});

topRight.addEventListener("click", (event) => {
  setValue(event.target, "btn");
  selectValidate("btn");
  isThereAWinner();
});
topRight.addEventListener("mouseover", (event) => {
  setValue(event.target, "mouseover");
});

topRight.addEventListener("mouseout", (event) => {
  resetClass(event.target, "mouseout");
  clickHappened(event.target);
});

midLeft.addEventListener("click", (event) => {
  setValue(event.target, "btn");
  selectValidate("btn");
  isThereAWinner();
});
midLeft.addEventListener("mouseover", (event) => {
  setValue(event.target, "mouseover");
});

midLeft.addEventListener("mouseout", (event) => {
  resetClass(event.target, "mouseout");
  clickHappened(event.target);
});

midCenter.addEventListener("click", (event) => {
  setValue(event.target, "btn");
  selectValidate("btn");
  isThereAWinner();
});
midCenter.addEventListener("mouseover", (event) => {
  setValue(event.target, "mouseover");
});

midCenter.addEventListener("mouseout", (event) => {
  resetClass(event.target, "mouseout");
  clickHappened(event.target);
});

midRight.addEventListener("click", (event) => {
  setValue(event.target, "btn");
  selectValidate("btn");
  isThereAWinner();
});
midRight.addEventListener("mouseover", (event) => {
  setValue(event.target, "mouseover");
});

midRight.addEventListener("mouseout", (event) => {
  resetClass(event.target, "mouseout");
  clickHappened(event.target);
});

bottomLeft.addEventListener("click", (event) => {
  setValue(event.target, "btn");
  selectValidate("btn");
  isThereAWinner();
});
bottomLeft.addEventListener("mouseover", (event) => {
  setValue(event.target, "mouseover");
});

bottomLeft.addEventListener("mouseout", (event) => {
  resetClass(event.target, "mouseout");
  clickHappened(event.target);
});

bottomCenter.addEventListener("click", (event) => {
  setValue(event.target, "btn");
  selectValidate("btn");
  isThereAWinner();
});
bottomCenter.addEventListener("mouseover", (event) => {
  setValue(event.target, "mouseover");
});

bottomCenter.addEventListener("mouseout", (event) => {
  resetClass(event.target, "mouseout");
  clickHappened(event.target);
});

bottomRight.addEventListener("click", (event) => {
  setValue(event.target, "btn");
  selectValidate("btn");
  isThereAWinner();
});
bottomRight.addEventListener("mouseover", (event) => {
  setValue(event.target, "mouseover");
});

bottomRight.addEventListener("mouseout", (event) => {
  resetClass(event.target, "mouseout");
  clickHappened(event.target);
});

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
