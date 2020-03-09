$(document).ready(function () {
    var $burger = $('.burger');
    var $close = $('.close');
    var $menu = $('.menu');
    var $menuTop = $('.menu-top');
    var $menuLink = $('.menu-link');
    var $navLink = $('.nav-link');


    $burger.click(function () {
        $menu.addClass('active-menu');
        $close.show();
        $menuTop.removeClass('fixed');

    });
    $close.click(function (e) {
        e.preventDefault();
        $menu.removeClass('active-menu');
        $menuTop.addClass('fixed');
        $close.hide();
    });

    $menuLink.click(function (e) {
        e.preventDefault();

        var attr = $(this).attr('href');
        var target = $(attr).offset().top;

        $('html, body').animate({
            scrollTop: target
        }, 1000)
    });

    $(window).scroll(function () {

        var scroll = $(this).scrollTop();

        $menuLink.each(function () {
            var id = $(this).attr('href');
            var selector = $(id).offset().top - 5;

            if (scroll >= selector) {
                $menuLink.removeClass('active-link');
                $(this).addClass('active-link');
            }
        })

    })

    var $grid = $('.tab-content').isotope({

        itemSelector: '.tab-item',

    });


    $navLink.click(function (e) {
        e.preventDefault();
        $navLink.parent().removeClass('nav-active');
        $(this).parent().addClass('nav-active');
        var attr = $(this).attr('data-filter');

        $grid.isotope({
            filter: attr
        })
    });

    $(".slider").owlCarousel({
        items: 4,
        margin: 25,
        loop: true,
        responsive: {
            320: {
                items:2
            },
            576: {
                items:2
            },
            768: {
                items:3
           
            },
            992: {
                items:4
            },
        }
    });
    
    
   

});

$('.counter').counterUp();