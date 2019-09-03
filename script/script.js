const wrap = document.getElementById('wrapper');
let square;

function pushButtonHandler (event) {

    if (!event.target.classList.contains ('button')) return;

    if (!document.querySelector('.small-square') && !document.querySelector('.big-square')) {
    
        let square = document.createElement('div');
        square.classList.add('small-square');
        wrap.appendChild(square);

    } else if (document.querySelector('.small-square')) {

        square.classList.add('big-square');
        square.classList.remove('small-square');
        
    } else {

        square.classList.remove('big-square');

    }


}


wrap.addEventListener('click', pushButtonHandler);
