const wrap = document.getElementById('wrapper'); // получаю доступ к обёртке для кнопок.
let square; //объявляю переменную в которую буду записывать создаваемый див

function pushButtonHandler (event) {

    if (!event.target.classList.contains ('button')) return; //проверяю где произошло событие, если не на кнопке, а только на обертке, то останавливаю выполнения функции

    if (!document.querySelector('.small-square') && !document.querySelector('.big-square')) {  //проверяю если на странице нет элемента ни с одним и ни с другим классом, то выполняю следующий код
    
        square = document.createElement('div'); //создаю элемент див и записываю его в переменную square
        square.classList.add('small-square'); //добавляю своем диву класс
        wrap.appendChild(square); //апендчайлдом размещаю свой див на страницу, в конец дива обертки

    } else if (document.querySelector('.small-square')) { // если верхнияя проверка не прошла, то проверяю есть ли на странице элемент с классом смол, если есть, то выполняю следующий код

        square.classList.remove('small-square'); //удаляю у элемента класс смол
        square.classList.add('big-square'); // и добавляю ему класс биг
        
    } else { // в случае не выолнения верхнего кода, выполняю код ниже

        wrap.removeChild(square); // удаляю со страницы элемент square

    }
}


wrap.addEventListener('click', pushButtonHandler); //навешиваю на обертку ивент лисенер и говорю ему отслеживать событие клик, и при наступлении события вызвать функцию pushButtonHandler
