(function () {

    jQuery(function ($) {

        var burger = $('.burger');
        var nav = $('.nav__list');
        var link = $('.nav__link');

        burger.click(function () {
            nav.toggleClass('nav__list_open');
            burger.toggleClass('burger_open');
        });
        link.click(function () {
            nav.removeClass('nav__list_open');
            burger.removeClass('burger_open');
        });

    });

})();
