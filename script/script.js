const wrap = document.getElementById('wrapper');

function pushButtonHandler (event) {

    if (!event.target.classList.contains ('button')) return;

    if (!document.body.contains ('small-square') && !document.body.classList.contains ('big-square')){
    const square = document.createElement ('div');
    square.id = 'square';
    square.classList.add ('small-square');
    square.classList.add (event.target.id);
    document.body.appendChild(square);
 }
    else if (document.body.classList.contains ('small-square')) {
        square.classList.remove('small-square');
        square.classList.add('big-square');
    } else if (document.body.classList.contains ('big-square')) {
        square.classList.remove('big-square');
    }
    

}

wrap.addEventListener('click', pushButtonHandler);