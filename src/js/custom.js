let triggersModal = document.querySelectorAll(".js-show-modal");
let modals = document.querySelectorAll(".js-modal");

function closeModal() {
	modals.forEach((modal) => {
		if (modal.classList.contains("is-open")) {
			modal.classList.remove("is-open");
		}
	});
}

triggersModal.forEach((button) =>
	button.addEventListener("click", function (e) {
		e.preventDefault();
		let modalID = this.dataset.modal;
		console.log(modalID);
		modals.forEach(function (modal) {
			if (modal.dataset.modal == modalID) {
				modal.classList.add("is-open");
			}
		});
	})
);

modals.forEach((modal) => {
	modal.addEventListener("click", function (event) {
		const isOutside = !event.target.closest(".modal__inner");
		const isCloseButton = event.target.matches(".js-close-modal");
		if (isCloseButton || isOutside) {
			closeModal();
		}
	});
});

window.addEventListener("keydown", (event) => {
	if (event.key === "Escape") {
		closeModal();
	}
});



  $('.engineering_services-image--sliding').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
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

   // ------------------------scroll-up js starts------------------------
   $('.scroll-top[data-target]').on('click', function (event) {

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