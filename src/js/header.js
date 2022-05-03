(function () {
    const selectButton = document.querySelectorAll('.header__select-button'); //Кнопка селекта во втором ряду header
    const selectItem = document.querySelectorAll('.header__select-list'); //Лист с вариантами художников во втором ряду header
    selectButton.forEach((element) => { //На каждую кнопку вешаем прослушку клика
        element.addEventListener('click', (e) => {  //На каждую кнопку вешаем прослушку клика
            let btnNumber= e.target.getAttribute('id') //Находим id кликнутого элемента
            selectItem.forEach((element, index) => { 
                let button = element.parentNode.childNodes[1];//Находим кнопку
                if(button.classList.contains('header__select-button_flipped-arrow')) {
                    button.classList.remove('header__select-button_flipped-arrow')//обратно переворачиваем стрелочки
                    element.classList.add('hide') //Добавляем класс .hide, чтобы избежать двух открытых сразу окон
                } else if (index == btnNumber - 1) { //Если индекс совпадает с id - 1, то переключаем классы:
                    element.classList.toggle('hide'); //.hide
                    button.classList.toggle('header__select-button_flipped-arrow') //.header__select-button_flipped-arrow
                }
            })
        })
    });
})();