$(document).each(function() {
    // --------------------Левое меню------------->
    $('.js-menu-open').on('click', function() {
        $('body').toggleClass('menu-left-open');
    });
    //---------------------Наверх справа---------->
    $(window).bind('scroll touchmove', function () {
        if ($(window).scrollTop() < 300) {
            $('.js-up-right-block').hide();
        } else {
            $('.js-up-right-block').show();
        }
    });
    $('.js-up-right-block').hover(function() {
        $('body').toggleClass('up-link-open');
    });
    $('.up-link').on('click', function(e) {
        e.preventDefault();
        $('body,html').animate({scrollTop:0},300);
    });
});


