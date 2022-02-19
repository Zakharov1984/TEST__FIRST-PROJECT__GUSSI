let colorElements = document.querySelectorAll('.customize__color-item');
let sizeItemElements = document.querySelectorAll('.customize__size-item');
let sizeSubItemElements = document.querySelectorAll('.customize__size-subitem');

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

function customizeSize() {
    sizeItemElements.forEach(element => {
        element.addEventListener('click', event => {
            if (!event.currentTarget.classList.contains('customize__size-item_active')) {
                if (!event.currentTarget.classList.contains('customize__size-item_no-product')) { // еще одна проверка, чтобы исключить размер которого нет.
                    sizeItemElements.forEach(element => {
                        element.classList.remove('customize__size-item_active');
                        element.firstChild.classList.remove('customize__size-subitem_active');
                    })
                    event.currentTarget.classList.add('customize__size-item_active');
                    event.currentTarget.firstChild.classList.add('customize__size-subitem_active');
                }
            }
        })
    })
}

customizeSize();