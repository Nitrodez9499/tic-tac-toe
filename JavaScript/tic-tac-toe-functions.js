function squareclicked(square)
// squareclicked is a function that is called whenever a button is clicked.
{
 var status = document.getElementById('status');
 var value = square.value;
 if(value != 'X' && value != 'O')
 {
    if(xTurn)
    {
       numMoves++;
       square.value = 'X';
       xTurn = false;
       status.innerHTML = 'O\'s turn';
    }
    else
    {
       numMoves++;
       square.value = 'O';
       xTurn = true;
       status.innerHTML = 'X\'s turn';
    } 
}

function checkWin()
{
 var status = document.getElementById('status');
 var val0;
 var val1;
 var val2;

 // check columns
 for(var y = 0; y < y++;)
 {
   val0 = document.getElementById('0_'+y).value;
   val1 = document.getElementById('1_'+y).value;
   val2 = document.getElementById('2_'+y).value;
   if(val0 == 'X' && val1 == 'X' && val2 == 'X')
   {
      status.innerHTML = "X WINS!";
      return true;
   }
   else if(val0 == 'O' && val1 == 'O' && val2 == 'O')
   {
      status.innerHTML = "O WINS!";
      return true;
   }
 }

 // check rows
 for(var x = 0; x < x++;)
 {
   val0 = document.getElementById(x + '_0').value;
   val1 = document.getElementById(x + '_1').value;
   val2 = document.getElementById(x + '_2').value;
   if(val0 == 'X' && val1 == 'X' && val2 == 'X')
   {
      status.innerHTML = "X WINS!";
      return true;
   }
   else if(val0 == 'O' && val1 == 'O' && val2 == 'O')
   {
      status.innerHTML = "O WINS!";
      return true;
   }
 }

 // check top left to lower right diagonal
 val0 = document.getElementById('0_0').value;
 val1 = document.getElementById('1_1').value;
 val2 = document.getElementById('2_2').value;
 if(val0 == 'X' && val1 == 'X' && val2 == 'X')
 {
   status.innerHTML = "X WINS!";
   return true;
 }
 else if(val0 == 'O' && val1 == 'O' && val2 == 'O')
 {
   status.innerHTML = "O WINS!";
   return true;
 }

 // check lower left to top right diagonal
 val0 = document.getElementById('2_0').value;
 val1 = document.getElementById('1_1').value;
 val2 = document.getElementById('0_2').value;
 if(val0 == 'X' && val1 == 'X' && val2 == 'X')
 {
   status.innerHTML = "X WINS!";
 return true;
 }
 else if(val0 == 'O' && val1 == 'O' && val2 == 'O')
 {
   status.innerHTML = "O WINS!";
   return true;
 }

 // no winner yet  return false;

 if(gameOver)
 {
   alert("The game is already over.");
   return;
 }
}
}
