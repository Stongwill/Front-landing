
// Popup
export const popup = () => {
// Все popup 
const dataPopup = document.querySelectorAll('[data-popup]');
dataPopup.forEach(popupBtn => {
    // Получаем запрашиваемый класс popup, который вызываем в кнопке
    const requstedClass = popupBtn.getAttribute('class');
    // Заменям пробелы на точку, чтобы сформировать селектор
    const openPopupBtn = requstedClass.replace(/\s/g, '.');
    // Необходимый класс popup, который хотим найти в нашей кнопке
    const neededPopup = document.querySelectorAll( `.${popupBtn.dataset.popup}`);
    // Все кнопки закрытия popup
    const closePopupBtn = document.querySelectorAll('[data-close]');

// Открытие Popup
function openPopup(popupSelector){
    // Все открытые popup
    const popupOpenSelector =  document.querySelectorAll('.open');
    // Если уже был открыт popup, то закрыть его, тем самам закроем старый и откроем новый
    if(popupOpenSelector){
        popupOpenSelector.forEach(modal => modal.classList.remove('open')); 
    }
    popupSelector.forEach(modal => modal.classList.add('open'));
    document.body.classList.add('noscroll');

}

// При нажатии на кнопку, открывать Popup 
function clickedPopup(popupSelector, btnOpenPopup){
    const btnPopup = document.querySelectorAll(`.${btnOpenPopup}`);
    btnPopup.forEach(btns => btns.addEventListener('click', (e) => {
        openPopup(popupSelector);
    }));
}

clickedPopup(neededPopup, openPopupBtn);

// При нажатии на крестик или пустоту - закрыть popup
function removePopup(popupSelector, btnClosePopup){
    popupSelector.forEach(modal => modal.addEventListener('click', (e) => {
        btnClosePopup.forEach(close => {
            // Закрываем при нажатии на крестик и мимо формы
            if(e.target == close || !e.target.closest('.popup_content')){
                closePopup(popupSelector);
            };
        })
    }));

    // Добавляем событие при нажатии клавиш, чтобы при нажатии на esc(27) наш popup закрывался
    document.addEventListener('keydown', (e) => {
        e.which === 27 && closePopup();
    });
}
removePopup(neededPopup, closePopupBtn);

// Закрытие Popup
function closePopup(){
    neededPopup.forEach(modal => modal.classList.remove('open'));
    document.body.classList.remove('noscroll');
}

// Послен того, как будет полностью загружена страница, через 1 мин открываем Popup
window.addEventListener('load', () => {
    setTimeout(() => {
        openPopup(document.querySelectorAll(".popup"));
    }, 60000)
})
});

   }
   