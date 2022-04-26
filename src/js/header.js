(function () {
    const selectButton = document.querySelectorAll('.header__select-button');
    const selectItem = document.querySelectorAll('.header__select-list');
    selectButton.forEach((element) => {
        console.log(element.getAttribute('id'))
        element.addEventListener('click', () => {
            let btnindex = selectButton.indexOf(element)
            selectItem.forEach((element) => {
                if(selectItem.indexOf(element) == btnindex) {
                    element.classList.toggle('hide')
                }
            })
        })
    })
})();