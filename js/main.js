$(document).ready(function() {
    // initialise popovers
    $('.progress').popover({trigger: 'hover'});
    $('.img-rounded').popover({trigger: 'hover', top: '10px'});
    
    // Ctrl + C
    $('.progress.active').on('mousemove', function(e){
        var parentOffset = $(this).parent().offset(); 
        //or $(this).offset(); if you really just want the current element's offset
        var relX = e.pageX - parentOffset.left;
        var relY = e.pageY - parentOffset.top;
        $(this).children('.progress-bar').width(relX);
    });
    
    // menu buttons
    $('.menu .item').on('click', function() {
        $('.menu .item.active').toggleClass('active');
        $('html body').animate({
            scrollTop: $('#section' + $(this).data('section')).offset().top + 10
        }, 500, function() {
            $(this).toggleClass('active');
        });
        return false;
    });
    
    // social buttons
    $('.social').on('click', function() {
        window.open($(this).data('href'), '_blank');
        return false;
    });
    
    // project buttons
    $('.img-rounded').on('click', function() {
        window.open($(this).data('href'), '_blank');
        return false;
    });
    // update active class when scrolling
    $(window).on('scroll', function() {
        if ($(window).scrollTop() < $('#section2').offset().top) {
            if ($('.menu .item.active').data('section') != 1) {
                $('.menu .item.active').toggleClass('active');
                $('.first').toggleClass('active');
            }
        }
        if ($(window).scrollTop() >= $('#section2').offset().top) {
            if ($('.menu .item.active').data('section') != 2) {
                $('.menu .item.active').toggleClass('active');
                $('.second').toggleClass('active');
            }
        }
        if ($(window).scrollTop() >= $('#section3').offset().top && $(window).scrollTop() < $('#section4').offset().top ) {
            if ($('.menu .item.active').data('section') != 3) {
                $('.menu .item.active').toggleClass('active');
                $('.third').toggleClass('active');
            }
        }
        if ($(window).scrollTop() >= $('#section4').offset().top) {
            if ($('.menu .item.active').data('section') != 4) {
                $('.menu .item.active').toggleClass('active');
                $('.fourth').toggleClass('active');
            }
        }
    });
});
