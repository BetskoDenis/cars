$(document).ready(function () {

    $(".arr").on('click', function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });

    $('.carousel__wrapper').owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        nav: true,
        smartSpeed: 1300

    });
    $('.our_works__wrapper').owlCarousel({
        center: true,
        margin:10,
        loop: true,
        dots: false,
        autoplay: false,
        nav: true,
        smartSpeed: 1300,
        responsive:{
            0:{
                items:1
            },
            680:{
                items:2
            },
            1000:{
                items:3
            },

        }

    });

})