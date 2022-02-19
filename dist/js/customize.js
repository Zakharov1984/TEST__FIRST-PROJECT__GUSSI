let colorElements = document.querySelectorAll('.customize__color-item');

function customizeColor() {
    colorElements.forEach(element => {
        element.addEventListener('click', event => {
            if (!event.currentTarget.classList.contains('customize__color-item_active')) {
                colorElements.forEach(element => {
                    element.classList.remove('customize__color-item_active');
                })
                event.currentTarget.classList.add('customize__color-item_active');
            }
        })
    })
}

customizeColor();