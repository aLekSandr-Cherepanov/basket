// Отслеживаем клик на странице
window.addEventListener('click', function (event) {

    // Проверяем что клик был совершен по кнопке "Добавить в корзину"
    if (event.target.hasAttribute('data-cart')) {
        
        // Находим карточку с товаром, внутри которой был совершен клик
        const card = event.target.closest('.card');
        console.log(card);
    }
})

//Остановился на 54:27 мин