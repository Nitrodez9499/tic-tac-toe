// squareclicked is a function that is called whenever a button is clicked.
let xTurn = true;

function squareclicked(square) {

    let gameOver = false;

    let numMoves = 0;

    let status = document.getElementById('status');
    let value = square.value;
    if (value != 'X' && value != 'O') {
        if (xTurn == true) {
            numMoves++;
            square.value = 'X';
            square.textContent = 'X';
            xTurn = false;
            status.innerHTML = 'O\'s turn';
            checkWin();
        } else if (xTurn == false) {
            numMoves++;
            square.value = 'O';
            square.textContent = 'O';
            xTurn = true;
            status.innerHTML = 'X\'s turn';
            checkWin();
        }
    }

    function checkWin() {
        let status = document.getElementById('status');
        let val0;
        let val1;
        let val2;

        // check columns
        for (let y = 0; y < 3; y++) {
            
            // set y to 0; check if y is less than y (0); then add 1 to y.
            
            // y_0
            val0 = document.getElementById(y + '_0').value;
            
            // y_1
            val1 = document.getElementById(y + '_1').value;
            
            // y_2
            val2 = document.getElementById(y + '_2').value;
            

            if (val0 == 'X' && val1 == 'X' && val2 == 'X') {
                
                status.innerHTML = "X WINS!";

                return true;

            } else if (val0 == 'O' && val1 == 'O' && val2 == 'O') {
                
                status.innerHTML = "O WINS!";

                return true;
            }
        }

        // check rows
        for (let x = 0; x < 3; x++) {
            val0 = document.getElementById('0_' + x).value;
            val1 = document.getElementById('1_' + x).value;
            val2 = document.getElementById('2_' + x).value;
            if (val0 == 'X' && val1 == 'X' && val2 == 'X') {
                status.innerHTML = "X WINS!";
                return true;
            } else if (val0 == 'O' && val1 == 'O' && val2 == 'O') {
                status.innerHTML = "O WINS!";
                return true;
            }
        }

        // check top left to lower right diagonal
        val0 = document.getElementById('0_0').value;
        val1 = document.getElementById('1_1').value;
        val2 = document.getElementById('2_2').value;
        if (val0 == 'X' && val1 == 'X' && val2 == 'X') {
            status.innerHTML = "X WINS!";
            return true;
        } else if (val0 == 'O' && val1 == 'O' && val2 == 'O') {
            status.innerHTML = "O WINS!";
            return true;
        }

        // check lower left to top right diagonal
        val0 = document.getElementById('2_0').value;
        val1 = document.getElementById('1_1').value;
        val2 = document.getElementById('0_2').value;
        if (val0 == 'X' && val1 == 'X' && val2 == 'X') {
            status.innerHTML = "X WINS!";
            return true;
        } else if (val0 == 'O' && val1 == 'O' && val2 == 'O') {
            status.innerHTML = "O WINS!";
            return true;
        }

        // no winner yet  return false;

        if (gameOver) {
            alert("The game is already over.");
            return;
        }
    }
}


function newgame()
{
   var status = document.getElementById('status');

   xTurn = true;
   status.innerHTML = 'X\'s turn';

   for(let x = 0; x < 3; x++)
   {
      for(let y = 0; y < 3; y++)
      {
         const id = x + '_' + y;

         const element = document.getElementById(id);

         element.value = '';
         element.textContent = '\xa0';

         console.log(element);
      }
   }
}
