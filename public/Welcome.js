$(".header1 .toggle").on("click", function() {
    $(this).closest(".header1-top").toggleClass("opened");
});

$(".header1 nav > ul > li > a").on("click", function() {
    $(this).closest("li").toggleClass("on");
});