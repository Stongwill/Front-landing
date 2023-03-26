// Табы
export const tabs = (btnTab, tabContent) => {
    const tabsBtn = document.querySelectorAll(btnTab); // кнопки табов
    const tabsContent = document.querySelectorAll(tabContent); // контент таба
    
    tabsContent.forEach((content, indexContent) => {        
        const hiddenStyle = `opacity: 0; position: absolute; visibility: hidden; pointer-events: none; top: -100%;`
        // Скрываем все, кроме первого блока
        content.style = indexContent !== 0 && hiddenStyle;
    tabsBtn.forEach((btn, indexBtn) => {
        // Первый элемент считается выбранный по умолчанию, поэтому добавляем ему класс 'active', 
        indexBtn == 0 && btn.classList.add('active');
        btn.addEventListener('click', (e) => {
            // Сверяем индексы, если расходятся скрываем блок
            content.style =  indexContent === indexBtn ? 'transition: all .6s ease 0s; opacity:1;pointer-events: all;visibility: visible;position: static;' : hiddenStyle;
            // При нажатии удаляем у всех элементов класс 'active'
            tabsBtn.forEach( btns => btns.classList.remove('active')); 
            // Добавляем класс 'active' нажатому элементу
            btn.classList.add('active');
        });
    }); 
    });

    // Табы в popup-калькуляторе
const tab = document.querySelectorAll('.balcon_icons_img img');
const tabMain = document.querySelectorAll('.balcon_icons_img');
const tabsImage = document.querySelectorAll('.popup_calc_content .big_img img');

tabMain.forEach((item, index) => { 
    index == 0 && item.classList.add('do_image_more');
    tabsImage.forEach((img, i) => {
    img.style.cssText = i == 0 &&  `display: block;margin: 0 auto`;
tab.forEach((itemTab, ind) =>  itemTab.addEventListener('click', (e) => {
    item.classList.remove('do_image_more')
        img.style.cssText = `display: none`;
        img.style.cssText = i == ind &&  `display: block;margin: 0 auto`;
        index == ind && item.classList.add('do_image_more');

}));
});
});

} 