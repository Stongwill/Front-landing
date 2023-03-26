export const gallery = () => {
    // Cоздаем блок для вывода изображения
   const pupupGallery = document.createElement('div');
   pupupGallery.classList.add('popup-gallery');
    // Создаем изображение, которому передадим путь
   const openPhoto = document.createElement('img');
   // Берем родительский элемент, куда будем вставлять новый блок
   const parentElGallery = document.querySelector('.works'); 
   // Добавляем контейнер изображению
    const imgContent = document.createElement('div');

   parentElGallery.append(pupupGallery);
   pupupGallery.append(imgContent);
   imgContent.append(openPhoto);


   parentElGallery.addEventListener('click', (e) => {
    e.preventDefault();
    if(e.target.classList.contains("preview")){
       pupupGallery.classList.add('active');
       imgContent.classList.add('popup__content')
       openPhoto.style.cssText = `max-width: 100%;height: 100%;object-fit: cover;transition: .3s;opacity: 1; visibility: visible; pointer-events: all`;
       const links = e.target.closest('.wow a').getAttribute('href');
       openPhoto.setAttribute('src', links);
       document.body.classList.add('noscroll');
    }
     else if(!e.target.closest('.popup__content')){
        openPhoto.style.cssText = `opacity: 0; visibility: hidden; pointer-events: none; position: absolute;`;
        pupupGallery.classList.remove('active');
        imgContent.classList.remove('popup__content')
        document.body.classList.remove('noscroll');
    }
   })
}
