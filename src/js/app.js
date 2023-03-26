
import "../scss/style.scss";
import "./slider.js";
import {isWebp} from "./modules/functions.js";
import changeFormCalc from "./modules/changeFormCalc.js";
import times from "./modules/times.js";
import {popup} from "./modules/popup.js";
import {forms} from "./modules/forms.js";
import {tabs} from "./modules/tabs.js";
import { gallery } from "./modules/gallery.js";

let state = {};
let deadline = '2024-03-22';
window.addEventListener('DOMContentLoaded', () => {
    isWebp();
    forms(state);
    popup();
    changeFormCalc(state);
    times('.container1', deadline);
    tabs(".glazing_block", ".glazing_content");
    tabs(".no_click ", ".tab2");
    gallery();
})
