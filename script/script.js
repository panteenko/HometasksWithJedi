const wrap = document.getElementById('wrapper');


function pushButtonHandler (event) {

    if (!event.target.classList.contains ('button')) return; 

    const square = document.querySelector('.small-square') || document.querySelector('.big-square');
    
    if (!square) {
    
        square = document.createElement('div');
        square.classList.add('small-square');
        wrap.appendChild(square); 

    } else if (square.classList.contains('.small-square')) { 

        square.classList.remove('small-square'); 
        square.classList.add('big-square'); 
        
    } else if (square.classList.contains('big-square')) {

        wrap.removeChild(square); 
    }
}


wrap.addEventListener('click', pushButtonHandler); 
