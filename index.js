let apiBottom = document.querySelector('.api-buttom');
let apiBox = document.querySelector('.api-box-1');
let prueba = document.querySelector('.prueba');



function myFirstEvent (e) {
    if (true) {
        prueba.innerHTML = `<h1>{
            Prueba
        }</h1>`
    }
};

apiBottom.addEventListener('click', myFirstEvent)
