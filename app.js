const boards = document.querySelectorAll('.board');
const boardLetters = document.querySelectorAll('.letters');
const boardNumbers = document.querySelectorAll('.numbers');
const boardLength = 10;

// console.log({boards, boardLetters, boardNumbers});

const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

const setUpBoards = function() {
  boards.forEach( (board, idx) => {    
    let color = 0;
    // Iterate through rows
    for (let i = 0; i < boardLength; i++) {
      let row = document.createElement('div');
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
      number.textContent = i + 1;
      board.appendChild(number);
    }
  })

}

// Initialize Board
setUpBoards();
setUpLabels();