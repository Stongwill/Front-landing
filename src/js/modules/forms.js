import { dispatchData } from "./dispatchData.js";
export const forms = (state) => {
    const message = {
        loading: "Загрузка",
        sucсess: "Форма отправлена",
        error: "Что-то пошло не так"
    };
        // все формы
        const formsPage = document.querySelectorAll('form');
        // все инпуты
        const inputForm = document.querySelectorAll('input');
        const inputPhone = document.querySelectorAll('input[name="user_phone"]');
        // Блокируем введенные буквы в поле, где должны быть только цифры
        inputPhone.forEach(phone => {
            phone.addEventListener('input', (e) => {
                // D - все не цифры 
            e.target.value = e.target.value.replace(/\D/, '');
            })
        })
    
        formsPage.forEach(form => form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Создаем div для добавления сообщения
            let statusMessage = document.createElement('div');
            // Добавляем класс для нового элемента
            statusMessage.classList.add('status');
            // Добавляем в конец формы
            form.append(statusMessage);
    
            // Объект FormData - брет все данные из формы
            const formData = new FormData(form);
            // Если у формы есть атрибут, тогда перебираем объект
            if(document.querySelector('[data-calc]')){
                for(let key in state){
                    // Добавляем к данным формы, данные которые мы передали
                    formData.append(key, state[key])
                }
            }
            var object = {};
            /* Перебираем все ключи и значения, записав всё в объект object
            для отправки данных на сервер                                */
            formData.forEach((value, key) =>{
                object[key] = value;
            });
            dispatchData("http://localhost:3004/posts", object, message).then(data => {
                statusMessage.textContent = message.sucсess;
            console.log(data)
            }).catch(() => {
                statusMessage.textContent = message.error;
            })
             //  В любом случае очищаем инпуты и удаляем статус сообщения
            .finally(() => {
                inputForm.forEach(input => {
                    input.value = '';
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 4000);
                })
            });
        }));
    }
