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

        loop: true,
        nav: true,
        margin: 5,
        smartSpeed: 1300,
        responsive:{
            0:{
                items:1
            },
            770:{
                items:2
            },
            1150:{
                items:3
            },

        }

    });

    function closeForm() {
        $('.form_head').css('display', 'none')
    }
    function openForm() {
        $('.form_head').css('display', 'flex')
    }
    $('.close_button').on('click', function () {
        closeForm()
    })
    $('.form_button').on('click', function () {
        closeForm()
    })
    $('.button').on('click', function () {
        openForm()
    })
    $('.steps_button').on('click', function () {
        openForm()
    })
    $('#form_button').on('click', function () {
        openForm()
    })
})