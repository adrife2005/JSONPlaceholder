let apiBottom = document.querySelector('.api-buttom');
let apiBox = document.querySelector('.api-box-1');
let prueba = document.querySelector('.prueba');


apiBottom.addEventListener('click', myFirstEvent)

function myFirstEvent (e) {
    if (true) {
        prueba.innerHTML = '<p>bien hecho</p>'
        prueba.appendChild(apiBox)
    }
};
