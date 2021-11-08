(function() {
    var angles = document.querySelectorAll(".okay1 .angle");
    var swiper = new Swiper(".okay1 .swiper-container", {
        slidesPerView: "auto",
        spaceBetween: 25,
        pagination: {
            clickable: true,
        },
    });

    for (var i = 0; i < angles.length; i += 1) {
        angles[i].addEventListener("click", function(e) {
            if (e.currentTarget.classList.contains("right")) {
                swiper.slideNext();
            } else {
                swiper.slidePrev();
            }
        }, true);
    }
})();

(function() {
    var swiper = new Swiper(".slider1 .swiper-container", {
        autoHeight: true,
        loop: true,
        autoplay: {
            delay: 5000,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        }
    });
})();