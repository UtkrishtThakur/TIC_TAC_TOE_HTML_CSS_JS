console.log("Welcome to tic tac toe game!");
let music = new Audio("glass-ting-89283.mp3");
let gameover = new Audio("wrong-47985.mp3");
let turnchange = new Audio("news-ting-6832.mp3");
let gamewon = new Audio("game-bonus-2-294436.mp3");
let turn = 'X';
let gameoverflag = false;

//function to change X O
const changeTurn = () => {
    return turn === 'X' ? 'O' : 'X';


}


//FUnc to check for a win
// ...existing code...
const checkWin = () => {
    let boxtexts = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    wins.forEach(e => {
        if (
            boxtexts[e[0]].innerText === boxtexts[e[1]].innerText &&
            boxtexts[e[1]].innerText === boxtexts[e[2]].innerText &&
            boxtexts[e[0]].innerText !== ''
        ) {
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " Won!";
            gamewon.currentTime = 0;
            gamewon.play();
            gameoverflag = true;
            document.querySelector('.gif').getElementsByTagName('img')[0].style.width="70px";
             document.querySelector('.gif').getElementsByTagName('img')[0].style.opacity="1";

        }
    });
}

//Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '' && !gameoverflag) {
            boxtext.innerText = turn;
            turnchange.currentTime = 0;
            turnchange.play();
            checkWin();
            if (!gameoverflag) {
                turn = changeTurn();
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    });
});


//Reset button func
// ...existing code...
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = '';
    });
    turn = 'X';
    gameoverflag = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    // Hide the gif image again
    document.querySelector('.gif').getElementsByTagName('img')[0].style.width = "0px";
    document.querySelector('.gif').getElementsByTagName('img')[0].style.opacity = "0";
});
// ...existing code...
// ...existing code... 
