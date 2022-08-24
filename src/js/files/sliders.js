import Swiper, { EffectFade, Controller } from "swiper";
import "../../scss/base/swiper.scss";

// Инициализация слайдеров
function initSliders() {
    // Перечень слайдеров
    // Проверяем, есть ли слайдер на стронице
    if (document.querySelector(".bottom-slider") && document.querySelector(".sub-slider__swiper")) {
        // Указываем скласс нужного слайдера
        // Создаем слайдер

        let subSlider = new Swiper(".sub-slider__swiper", {
            modules: [Controller],
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 0,
            autoHeight: false,
            slideToClickedSlide: true,
            speed: 800,
        });
        let bottomSlider = new Swiper(".bottom-slider", {
            modules: [EffectFade, Controller],
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 0,
            autoHeight: false,
            speed: 800,
            effect: "fade",
        });
        bottomSlider.controller.control = subSlider;
        subSlider.controller.control = bottomSlider;
    }
    if (document.querySelector(".connected__slider")) {
        new Swiper(".connected__slider", {
            modules: [],
            observer: true,
            observeParents: true,
            slidesPerView: 4.4,
            spaceBetween: 0,
            autoHeight: false,
            speed: 800,

            // Брейкпоинты
            breakpoints: {
                320: {
                    slidesPerView: 1,
                },
                479.98: {
                    slidesPerView: 2,
                },
                767.98: {
                    slidesPerView: 3,
                },
                991.98: {
                    slidesPerView: 4,
                },
                1310: {
                    slidesPerView: 4.4,
                },
            },
        });
    }
}

window.addEventListener("load", function (e) {
    initSliders();
});
