// const wrap = document.getElementById('wrapper');


// function pushButtonHandler (event) {

//     if (!event.target.classList.contains ('button')) return; 

//     let square = document.querySelector('.small-square') || document.querySelector('.big-square');
    
    
//     if (!square) {
    
//         square = document.createElement('div');
//         square.classList.add('small-square');
//         wrap.appendChild(square); 

//     } else if (square.classList.contains('small-square')) { 
        
//         square.classList.remove('small-square'); 
//         square.classList.add('big-square'); 
        
//     } else if (square.classList.contains('big-square')) {

//         wrap.removeChild(square); 
//     }
// }


// wrap.addEventListener('click', pushButtonHandler); 

const wrap = document.getElementById('wrapper');


function pushButtonHandler (event) {

    if (!event.target.classList.contains ('button')) return; 

    let target = event.target.id;
    let square = document.querySelector(target+'Square');

    
    if (!square) {
    
        square = document.createElement('div');
        square.classList.add('small-square');
        square.classList.add(target+'Square');
        wrap.appendChild(square); 

    } else if (square.classList.contains('small-square') && square.classList.contains(target+'Square')) { 
        
        square.classList.remove('small-square'); 
        square.classList.add('big-square'); 
        
    } else if (square.classList.contains('big-square') && square.classList.contains(target+'Square')) {

        wrap.removeChild(square); 
    }
}


wrap.addEventListener('click', pushButtonHandler); 

