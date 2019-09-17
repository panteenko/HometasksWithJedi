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
    let targetClass = target + 'Square';
    let square = document.querySelector('.' + targetClass);

    
    if (!square) {
    
        square = document.createElement('div');
        square.classList.add('small-square');
        square.classList.add(targetClass);
        wrap.appendChild(square); 

    } else if (square.classList.contains('small-square') && square.classList.contains(targetClass)) { 

        square.classList.remove('small-square'); 
        square.classList.add('big-square'); 
        
    } else if (square.classList.contains('big-square') && square.classList.contains(targetClass)) {

        wrap.removeChild(square); 
    }
}
wrap.addEventListener('click', pushButtonHandler); 


//Таймер начинается здесь


let timer = document.getElementById('timer');
const startBtn = document.querySelector('button.start');
const stopBtn = document.querySelector('button.stop');

function startCountDown () {
    let toNum = Number(timer.textContent);

    let int = setInterval(function () {

        toNum++;
        timer.textContent = toNum;
        
    }, 1000);

}

function stopCountDown () {

    clearInterval();

}



startBtn.addEventListener('click', startCountDown);
stopBtn.addEventListener('click', stopCountDown);



