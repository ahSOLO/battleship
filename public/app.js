const boards = document.querySelectorAll('.board');
const boardLetters = document.querySelectorAll('.letters');
const boardNumbers = document.querySelectorAll('.numbers');
const boardLength = 10;

const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

const setUpBoards = function() {
  boards.forEach( (board, idx) => {    
    let color = 0;
    // Iterate through rows
    for (let i = 0; i < boardLength; i++) {
      let row = document.createElement('div');
      row.classList.add("row");
      board.appendChild(row).id = `board_${idx + 1}_row_${i + 1}`;
      if (i % 2 === 1) {
        color = 1;
      } else {
        color = 0;
      }
      // Iterate through columns
      for (let j = 0; j < boardLength; j++) {
        let square = document.createElement('div');
        square.classList.add("square");
        if (color) {
          square.classList.add("sqr1");
          color = 0;
        } else {
          square.classList.add("sqr2");
          color = 1;
        }
        document.getElementById(`board_${idx + 1}_row_${i + 1}`).appendChild(square);
      }
    }
  })
}

const setUpLabels = function () {
  // Generate letter labels
  boardLetters.forEach( (board) => {    
    for (let i = 0; i < boardLength; i++) {
      let letter = document.createElement('li');
      letter.textContent = letters[i];
      board.appendChild(letter);
    }
  })
  // Generate number labels
  boardNumbers.forEach( (board) => {    
    for (let i = 0; i < boardLength; i++) {
      let number = document.createElement('li');
      number.classList.add("number");
      number.textContent = i + 1;
      board.appendChild(number);
    }
  })
}

// Initialize Board
setUpBoards();
setUpLabels();

// Allow Drag and Drop
ships = document.querySelectorAll('.ship');
ships.forEach(() => {
  addEventListener("dragstart", (ev) => {
    ev.target.style.opacity = '0.4';
    ev.dataTransfer.effectAllowed = 'move';
    ev.dataTransfer.setData('text/html', ev.target.outerHTML);
  });
  addEventListener("dragend", (ev) => {
    ev.target.style.opacity = '1';
  });
});

playerBoard = document.querySelector('#board_2');
playerBoard.addEventListener("dragover", (ev) => {
  ev.preventDefault();
});
playerBoard.addEventListener("dragenter", (ev) => {
  ev.target.classList.add("hover");
});
playerBoard.addEventListener("dragleave", (ev) => {
  ev.target.classList.remove("hover");
});
playerBoard.addEventListener("drop", (ev) => {
  ev.target.classList.remove("hover");
  ev.target.outerHTML = ev.dataTransfer.getData('text/html');
});
