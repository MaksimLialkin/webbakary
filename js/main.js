$(function () {
    $('.news__slider').slick({
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/arrow-left.png"></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/arrow-right.png"></button>',
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
    });

    $(".menu").on("click", "a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({
            scrollTop: top
        }, 1500);
    });

});