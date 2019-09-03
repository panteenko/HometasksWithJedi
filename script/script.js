const wrap = document.getElementById('wrapper');
let square = {};

function pushButtonHandler (event) {

    if (!event.target.classList.contains ('button')) return;

    if (!document.querySelector('.small-square') && !document.querySelector('.big-square')) {
    
        square = document.createElement('div');
        square.classList.add('small-square');
        wrap.appendChild(square);

    } else if (document.querySelector('.small-square')) {

        square.classList.remove('small-square');
        square.classList.add('big-square');
        
    } else {


        wrap.removeChild(square);

    }


}


wrap.addEventListener('click', pushButtonHandler);
