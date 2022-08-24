import Swiper, { Navigation } from "swiper";
import "../../scss/base/swiper.scss";

// $('.subslider-char__slick').slick({
// 	zIndex: 10,
// 	speed: 800,
// 	slidesToShow: 5,
// 	arrows: false,
// 	asNavFor: ".slider-char__slick",
// 	focusOnSelect: true,
//  });
//  $('.slider-char__slick').slick({
// 	zIndex: 10,
// 	speed: 800,
// 	slidesToShow: 1,
// 	fade: true,
// 	arrows: false,
// 	draggable: true,
// 	asNavFor: ".subslider-char__slick",
//  });
//  $('.connected__slick').slick({
// 	zIndex: 10,
// 	speed: 800,
// 	slidesToShow: 4.4,
// 	arrows: false,
// 	draggable: true,
// 	infinite: false,
// 	responsive: [
// 	   {
// 		  breakpoint: 1310,
// 		  settings: {
// 			 slidesToShow: 4,
// 		  }
// 	   },
// 	   {
// 		  breakpoint: 992.98,
// 		  settings: {
// 			 slidesToShow: 3,
// 		  }
// 	   },
// 	   {
// 		  breakpoint: 767.98,
// 		  settings: {
// 			 slidesToShow: 2,
// 		  }
// 	   },
// 	   {
// 		  breakpoint: 479.98,
// 		  settings: {
// 			 slidesToShow: 1,
// 		  }
// 	   }
// 	]
//  });

// Инициализация слайдеров
function initSliders() {
    // Перечень слайдеров
    // Проверяем, есть ли слайдер на стронице
    if (document.querySelector(".swiper")) {
        // Указываем скласс нужного слайдера
        // Создаем слайдер
        new Swiper(".swiper", {
            // Указываем скласс нужного слайдера
            // Подключаем модули слайдера
            // для конкретного случая
            modules: [Navigation],
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 0,
            autoHeight: true,
            speed: 800,

            //touchRatio: 0,
            //simulateTouch: false,
            //loop: true,
            //preloadImages: false,
            //lazy: true,

            /*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

            // Пагинация
            /*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

            // Скроллбар
            /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

            // Кнопки "влево/вправо"
            navigation: {
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next",
            },

            // Брейкпоинты
            /*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
            // События
            on: {},
        });
    }
}

window.addEventListener("load", function (e) {
    initSliders();
});
