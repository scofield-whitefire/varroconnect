/*-----------------------------
    animation on Scroll AOS.js
  -----------------------------*/
  AOS.init({
    easing: 'ease-in-out', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    duration: 500, // values from 0 to 3000, with step 50ms
  });

  /*-----------------------------
    cover-parallax
  -----------------------------*/
  var image = document.getElementsByClassName('cover-parallax');
  new simpleParallax(image, {
    delay: .6,
    transition: 'cubic-bezier(0,0,0,1)'
  });

  var image = document.getElementsByClassName('basic-parallax');
  new simpleParallax(image, {
    delay: .6,
    transition: 'cubic-bezier(0,0,0,1)'
  });

  var image = document.getElementsByClassName('horizontal-parallax');
  new simpleParallax(image, {
    orientation: 'right'
  });

  var image = document.getElementsByClassName('scale-parallax');
  new simpleParallax(image, {
    scale: 1.5
  });

  var image = document.getElementsByClassName('transition-parallax');
  new simpleParallax(image, {
    delay: .6,
    transition: 'cubic-bezier(0,0,0,1)'
  });




  /*-----------------------------
    Checkbox Select
  -----------------------------*/
  $('.checkbox-item .item-select').on('click', function () {
    $(this).parent().find('.item-select.active').removeClass('active');
    $(this).addClass('active');
  });

  /*-----------------------------
      feature_strories
    -----------------------------*/

  var swiper = new Swiper('.blog-slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      240: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      540: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    }
  });

  /*-----------------------------
      swiper_vertical
    -----------------------------*/
  var swiper = new Swiper('.swiper_vertical', {
    direction: 'vertical',
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    // mousewheel: {
    //   enable: true
    // },
  });

  /*-----------------------------
     tooltip
   -----------------------------*/
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });

  /*-----------------------------
   fixSide_scroll
 -----------------------------*/
  var sticky = new Sticky('.fixSide_scroll');

  /*-----------------------------
  ScrollMagic (init controller)
-----------------------------*/
var controller = new ScrollMagic.Controller();


/*-----------------------------
  ScrollMagic (init controller)
-----------------------------*/
var controller = new ScrollMagic.Controller();