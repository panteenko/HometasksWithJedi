// function showRedBox () {
//     const square = document.createElement('div');
//         square.classList.add('redSquare');
//         document.body.appendChild(square);
// }
// function showGreenBox () {
//     const square = document.createElement('div');
//         square.classList.add('greenSquare');
//         document.body.appendChild(square);
// }
// function showBlueBox () {
//     const square = document.createElement('div');
//         square.classList.add('blueSquare');
//         document.body.appendChild(square);
// }
// function showBlackBox () {
//     const square = document.createElement('div');
//         square.classList.add('blackSquare');
//         document.body.appendChild(square);
// }
function showColorBox () {
    const square = document.createElement ('div');
    document.body.appendChild(square);
    if (btnRed == true) {
        square.classList.add('redSquare')
    } else if (btnGreen ==) {
        square.classList.add('greenSquare')
    } else if (btnBlue == true) {
        square.classList.add('blueSquare')
    }else if (btnBlack == true) {
        square.classList.add('blackSquare')
    }
}

var btnRed = document.createElement('button');
btnRed.className = "testButton";
btnRed.innerHTML = "<strong>Красный</strong>";
document.body.appendChild(btnRed);
btnRed.addEventListener('click', showRedBox);

var btnGreen = document.createElement('button');
btnGreen.className = "testButton";
btnGreen.innerHTML = "<strong>Зеленый</strong>";
document.body.appendChild(btnGreen);
btnGreen.addEventListener('click', showGreenBox);

var btnBlue = document.createElement('button');
btnBlue.className = "testButton";
btnBlue.innerHTML = "<strong>Синий</strong>";
document.body.appendChild(btnBlue);
btnBlue.addEventListener('click', showBlueBox);

var btnBlack = document.createElement('button');
btnBlack.className = "testButton";
btnBlack.innerHTML = "<strong>Чёрный</strong>";
document.body.appendChild(btnBlack);
btnBlack.addEventListener('click', showBlackBox);