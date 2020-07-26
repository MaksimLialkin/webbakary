$(function () {
    $('.news__slider').slick({
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/arrow-left.png"></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/arrow-right.png"></button>',
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
    });

    $(".menu").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1500);
    });

});