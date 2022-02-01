$(document).ready(function() {

    $("td").click(function() {
        move(this, huPlayer, huCo);
    });
});

var board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
var huPlayer = "X";
var aiPlayer = "O";
var iter = 0;
var round = 0;
var aiCo = "white";
var huCo = "#FF0000";
let gameOver = false;

function move(element, player, color) {

    let leftOverMoves = [];

    for (let i = 0; i < board.length; i++) {
        if (isNaN(board[i])) {
            continue;
        }

        leftOverMoves.push(board[i])
    }

    if (gameOver || leftOverMoves.length < 1) {
        return;
    }

    if (board[element.id] != "X" && board[element.id] != "O") {
        round++;
        $(element).text(player)
        board[element.id] = player;

        if (winning(board, player)) {
            $(".status").text('YOU WIN');
            gameOver = true;
            return;
        } else if (round > 8) {
            $(".status").text('TIE');
            gameOver = true;
            return;
        } else {
            round++;
            var index = minimax(board, aiPlayer).index;
            var selector = "#" + index;
            $(selector).text('O');
            board[index] = aiPlayer;
            console.log(board);
            console.log(index);
            if (winning(board, aiPlayer)) {
                $(".status").text('YOU LOSE');
                gameOver = true;
                return;
            } else if (round === 0) {
                $(".status").text('TIE');
                gameOver = true;
                return;
            }
        }
    }
}

function reset() {
    round = 0;
    board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    $("td").text('');
    $(".status").text("X's turn");
}

function minimax(reboard, player) {
    iter++;
    let array = avail(reboard);
    if (winning(reboard, huPlayer)) {
        return {
            score: -10
        };
    } else if (winning(reboard, aiPlayer)) {
        return {
            score: 10
        };
    } else if (array.length === 0) {
        return {
            score: 0
        };
    }

    var moves = [];
    for (var i = 0; i < array.length; i++) {
        var move = {};
        move.index = reboard[array[i]];
        reboard[array[i]] = player;

        if (player == aiPlayer) {
            var g = minimax(reboard, huPlayer);
            move.score = g.score;
        } else {
            var g = minimax(reboard, aiPlayer);
            move.score = g.score;
        }
        reboard[array[i]] = move.index;
        moves.push(move);
    }

    var bestMove;
    if (player === aiPlayer) {
        var bestScore = -10000;
        for (var i = 0; i < moves.length; i++) {
            if (moves[i].score > bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    } else {
        var bestScore = 10000;
        for (var i = 0; i < moves.length; i++) {
            if (moves[i].score < bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    }
    return moves[bestMove];
}

//available spots
function avail(reboard) {
    return reboard.filter(s=>s != 'X' && s != 'O');
}

// winning combinations
function winning(board, player) {
    if ((board[0] == player && board[1] == player && board[2] == player) || (board[3] == player && board[4] == player && board[5] == player) || (board[6] == player && board[7] == player && board[8] == player) || (board[0] == player && board[3] == player && board[6] == player) || (board[1] == player && board[4] == player && board[7] == player) || (board[2] == player && board[5] == player && board[8] == player) || (board[0] == player && board[4] == player && board[8] == player) || (board[2] == player && board[4] == player && board[6] == player)) {
        return true;
    } else {
        return false;
    }
}
