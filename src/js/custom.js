const body = document.querySelector("body");
const navbar = document.querySelector(".main-header");
const menuBtn = document.querySelector(".menu-btn");



  $('.featured-slider-grid').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
          

  $(document).ready(function () {
    $("#menu-btn").click(function (e) { 
      e.preventDefault();
      $(".main-header").toggleClass("mobile-active");
    });


     // ------------------------scroll-down js starts------------------------
     $('.scroll-down[data-target]').on('click', function (event) {

      var target = $(this.getAttribute('data-target'));
      if (target.length) {
          event.preventDefault();
          $('html, body').stop().animate({
              scrollTop: target.offset().top
          }, 1000);
      }

  });
  // ------------------------scroll-down js ends--------------------------
  });
