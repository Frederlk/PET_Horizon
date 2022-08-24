$(document).ready(function () {
   window.onload = function () {
      if ($('.home__video')) {
         var rellax = new Rellax('.home__video', {
            center: true,
         });
      };
      $('.subslider-char__slick').slick({
         zIndex: 10,
         speed: 800,
         slidesToShow: 5,
         arrows: false,
         asNavFor: ".slider-char__slick",
         focusOnSelect: true,
      });
      $('.slider-char__slick').slick({
         zIndex: 10,
         speed: 800,
         slidesToShow: 1,
         fade: true,
         arrows: false,
         draggable: true,
         asNavFor: ".subslider-char__slick",
      });
      $('.connected__slick').slick({
         zIndex: 10,
         speed: 800,
         slidesToShow: 4.4,
         arrows: false,
         draggable: true,
         infinite: false,
         responsive: [
            {
               breakpoint: 1310,
               settings: {
                  slidesToShow: 4,
               }
            },
            {
               breakpoint: 992.98,
               settings: {
                  slidesToShow: 3,
               }
            },
            {
               breakpoint: 767.98,
               settings: {
                  slidesToShow: 2,
               }
            },
            {
               breakpoint: 479.98,
               settings: {
                  slidesToShow: 1,
               }
            }
         ]
      });
      $('.connected__filter-item').click(function (event) {
         var i = $(this).data('filter');
         if (i == 1) {
            $('.connected__slide').show();
         } else {
            $('.connected__slide').hide();
            $('.connected__slide.f_' + i).show();
         }
         $('.connected__filter-item').removeClass('_active');
         $(this).addClass('_active');

         return false;
      });
   };
});