const wrap = document.getElementById('wrapper');
let square;

function pushButtonHandler (event) {

    if (!event.target.classList.contains ('button')) return;
    
    let square = document.createElement('div');
    square.classList.add('small-square');
    wrap.appendChild(square);

    checkClass(square);

}

function checkClass (square) {

    if (document.getElementsByClassName('small-square')) {
        square.classList.remove('small-square');
        square.classList.add('big-square');
    }
    

}

wrap.addEventListener('click', pushButtonHandler);
