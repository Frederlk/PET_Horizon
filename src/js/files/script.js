// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

window.onload = function () {
    if (document.querySelector("#filter")) {
        const filterItems = document.querySelectorAll(".connected__filter-item");
        const filterColumns = document.querySelectorAll(".connected__slide");
        filterColumns.forEach((item) => item.classList.add("_showed"));

        filterItems.forEach((item) =>
            item.addEventListener("click", function (e) {
                let i = this.dataset.filter;
                if (i == 1) {
                    filterColumns.forEach((item) => item.classList.add("_showed"));
                } else {
                    filterColumns.forEach((item) => item.classList.remove("_showed"));
                    document.querySelectorAll(".connected__slide.f_" + i).forEach((item) => item.classList.add("_showed"));
                }
                filterItems.forEach((item) => item.classList.remove("_active"));
                this.classList.add("_active");
                return false;
            })
        );
    }
};
