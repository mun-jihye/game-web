// @root start
// @root end

// @icons1 start
(function () {
    var angles = document.querySelectorAll(".icons1 .angle");
    var swiper = new Swiper(".icons1 .swiper-container", {
        slidesPerView: "auto",
        spaceBetween: 25,
        pagination: {
            clickable: true,
        },
    });

    for (var i = 0; i < angles.length; i += 1) {
        angles[i].addEventListener("click", function (e) {
            if (e.currentTarget.classList.contains("right")) {
                swiper.slideNext();
            } else {
                swiper.slidePrev();
            }
        }, true);
    }
})();
// @icons1 end

// @text1 start
// @text1 end

// @footer1 start
// @footer1 end