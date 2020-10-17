const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 800
});

$(window).scroll(function () {
    $(".arrow").css("opacity", 1 - $(window).scrollTop() / 250);
    //250 is fade pixels
});