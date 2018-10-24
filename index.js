const readline = require('readline');

var board = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];


//index should be [i,j]

function isValid(row, col){
    if(row > 3 || col > 3) {
        return false;
    }
    if(board[row][col] !== null){
        return false;
    }
    return true;
}

function mark(row, col, symbol){
    if(isValid()){
        board[row][col] = symbol;
    } else {
        return false;
    }
}



function isWin() {

    //check rows
    for(var i = 0; i < 3; i++){
        if(board[i][0] === board[i][1] &&
            board[i][1] === board[i][2] &&
            board[i][2] === board[i][0] &&
            board[i][0] !== null
        ) {
            return true;
        }        
    }

    //check cols
    for(var i = 0; i < 3; i++){
        if(board[0][i] === board[1][i] &&
            board[1][i] === board[2][i] &&
            board[2][i] === board[0][i] &&
            board[0][i] !== null
        ) {
            return true;
        }
    }

    //check diag
    if(board[0][0] === board[1][1] &&
        board[1][1] === board[2][2] &&
        board[2][2] === board[0][0] &&
        board[0][0] !== null
    ) {
        return true;
    }
    if(board[0][2] === board[1][1] &&
        board[1][1] === board[2][0] &&
        board[2][0] === board[0][2] &&
        board[0][2] !== null
    ) {
        return true;
    }

    return false;

}

console.log(isWin())


while(isWin()) {
    

}