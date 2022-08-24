// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

// $(document).ready(function () {
//     window.onload = function () {
//         if ($(".home__video")) {
//             var rellax = new Rellax(".home__video", {
//                 center: true,
//             });
//         }

//         $(".connected__filter-item").click(function (event) {
//             var i = $(this).data("filter");
//             if (i == 1) {
//                 $(".connected__slide").show();
//             } else {
//                 $(".connected__slide").hide();
//                 $(".connected__slide.f_" + i).show();
//             }
//             $(".connected__filter-item").removeClass("_active");
//             $(this).addClass("_active");

//             return false;
//         });
//     };
// });
