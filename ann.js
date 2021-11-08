(function() {
    var angles = document.querySelectorAll(".icons1 .angle");
    var swiper = new Swiper(".icons1 .swiper-container", {
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

$(".board1 th input[type=checkbox]").on("click", function() {
    var checked = $(this).prop("checked");
    $(this).closest("thead").siblings("tbody").find("td input[type=checkbox]").each(function() {
        $(this).prop("checked", checked);
    })
})