const wrap = document.getElementById('wrapper');
let square;

function pushButtonHandler (event) {

    if (!event.target.classList.contains ('button')) return;
    
    if (!square.classList.contains ('small-square') && square.classList.contains ('big-square')) {
        document.createElement ('div');
        square.classList.add ('small-square');
        square.classList.add (event.target.id);
        wrap.appendChild(square);

    } else if (square.classList.contains ('small-square')) {
        square.classList.remove('small-square');
        square.classList.add('big-square');
    } else if (square.classList.contains ('big-square')) {
        square.classList.remove('big-square');
    }
    

}

wrap.addEventListener('click', pushButtonHandler);

