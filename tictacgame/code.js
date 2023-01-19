let turn = "X"

const changeTurn = () => {
    return turn === 'X' ? "O" : "X"
}

const win = () => {
    let boxes = document.querySelectorAll(".box")
    console.log(boxes)
};

let boxes = Array.from(document.querySelectorAll('.box'))

const checkWin = () => {
    let winCases = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    let win = '';
    winCases.forEach(mycase => {
        if (boxes[mycase[0]].querySelector('.value').innerHTML === boxes[mycase[1]].querySelector('.value').innerHTML && boxes[mycase[1]].querySelector('.value').innerHTML === boxes[mycase[2]].querySelector('.value').innerHTML &&  boxes[mycase[2]].querySelector('.value').innerHTML !== ''){
            win = turn
        } 
    })

    if (win !== ''){
        return [true, turn]
    } else {
        return [false, null]
    }
}

const reset = () => {
    let boxes = Array.from(document.querySelectorAll('.box'))
    boxes.forEach(box => {
        value = box.querySelector('.value')
        value.innerHTML = '';
    })
    turn = 'X'
    document.querySelector('#turn').innerHTML = 'X'

};

const resetBtn = document.querySelector('#resetBtn')
resetBtn.addEventListener('click', reset);

let winCon = document.querySelector('.winContainer');
let gameover = false;
document.querySelector('.playagain').addEventListener('click', () => {
    reset();
    winCon.style.height = '0';
    gameover = false;
    document.body.style.backgroundColor = 'white';
})


boxes.map(box => {
    box.addEventListener('click', (e) => {
        value = box.querySelector('.value')
        if (value.innerHTML === '' && !gameover) {
            value.innerHTML = turn;
            let status = checkWin();
            if (status[0]){
                gameover = true;
                document.body.style.backgroundColor = 'lightgreen';
                document.querySelector('#winner').innerHTML = turn;
                
                winCon.style.height = '30%';

                
            } else{
                turn = changeTurn();
                document.querySelector("#turn").innerHTML = turn;
            }
            
        };

        
    })
})





