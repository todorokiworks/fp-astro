// slick
$(function () {
  /* $(".top-front__slider").slick({
     dots: true,
     arrows: true,
     autoplay: true,
     autoplaySpeed: 4000,
     speed: 1000,
     variableWidth: false,
     prevArrow: '<img src="asset/images/top/icon_next_slider.svg" class="slide-arrow prev-arrow" width="30" height="30">',
     nextArrow: '<img src="asset/images/top/icon_next_slider.svg" class="slide-arrow next-arrow" width="30" height="30">',
       responsive: [
       {
       breakpoint: 1440,
       settings: {
       }
     },
     {
       breakpoint: 767,
       settings: {
       }
     }
   ]
   });*/

  //.top-banner__section バナー内リストホバー時の挙動
  let beginnerURL = $('.top-banner__section .top-banner.__beginner').attr('href');
  let veteranURL = $('.top-banner__section .top-banner.__veteran').attr('href');
  let bnrChldListItm = $('.top-banner__section .top-banner__listItem');

  bnrChldListItm.mouseenter(function () {
    let changeURL = $(this).attr('data-url');
    $(this).closest('.top-banner').attr('href', changeURL);
  });
  bnrChldListItm.mouseleave(function () {
    let parentBnr = $(this).closest('.top-banner');
    if (parentBnr.hasClass('__beginner')) {
      parentBnr.attr('href', beginnerURL);
    } else if (parentBnr.hasClass('__veteran')) {
      parentBnr.attr('href', veteranURL);
    }
  });
})
