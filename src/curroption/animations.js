const $ = require('jquery');
const ScrollReveal = require('scrollreveal');

$(function() {

    window.sr = ScrollReveal();

    if ($(window).width() < 768) {

        if ($('.conference-timeline-content').hasClass('js--fadeInLeft')) {
            $('.conference-timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
        }

        sr.reveal('.js--fadeInRight', {
            origin: 'right',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 1000,
        });

    } else {

        sr.reveal('.js--fadeInLeft', {
            origin: 'left',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 1000,
        });

        sr.reveal('.js--fadeInRight', {
            origin: 'right',
            delay: 500,
            distance: '300px',
            easing: 'ease-in-out',
            duration: 1000,
        });

    }

    sr.reveal('.js--fadeInLeft', {
        origin: 'left',
        distance: '300px',
        easing: 'ease-in-out',
        duration: 1000,
    });

    sr.reveal('.js--fadeInRight', {
        origin: 'right',
        delay: 500,
        distance: '300px',
        easing: 'ease-in-out',
        duration: 1000,
    });


});