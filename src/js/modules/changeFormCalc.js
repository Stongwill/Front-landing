export default function changeFormCalc(state, event){
   const tabMain = document.querySelectorAll('.balcon_icons_img');
   const widthField = document.querySelectorAll('#width');
   const heightField = document.querySelectorAll('#height');
   const selectField = document.querySelectorAll('#view_type');
   const checkboxField = document.querySelectorAll('.checkbox');
    
   function createObject (el, event, name){
    el.forEach((tab, ind) => tab.addEventListener(event, () => {
        switch(tab.nodeName){
            case 'SPAN':
            state[name] = ind;
            break
            case 'INPUT':
            state[name] = +tab.value;
            if(tab.getAttribute("type") === 'checkbox'){
                ind === 0  ? state[name] = "Холодное" : state[name] = "Теплое";
                checkboxField.forEach((check, j) => {
                    check.checked = false;
                    check.checked = ind === j && true;
                })
            }
            break;
            case 'SELECT':
            state[name] = tab.value;
            break;
            
        }
        console.log(state);
        })
       )
   }
   createObject(tabMain, 'click', "form");
   createObject(widthField,'input', "width");
   createObject(heightField,'input', "height");
   createObject(selectField, 'change', "option");
   createObject(checkboxField, 'change', "checked");
}