const wrap = document.getElementById('wrapper');

function pushButtonHandler (event) {
    if (!event.target.classList.contains ('button')) return;
    const square = document.createElement ('div');
    square.classList.add ('small-square');
    square.classList.add (event.target.id);
    
    if (square.classList.contains('small-square')) {
        square.classList.remove('small-square');
        square.classList.add('big-square');
        square.classList.add(event.target.id);
    } else if (square.classList.contains('big-square')) {
        square.classList.remove('big-square');
    }
    document.body.appendChild(square);
}

wrap.addEventListener('click', pushButtonHandler);