// ПОПАП

$(document).ready(function () {

    $('.popup').hide();

    var optionFancybox = {
        padding: ['50px', '30px', '50px', '30px'],
        scrollOutside: false,
        keys: {
            close: [27]
        },
        fitToView: false,
        autoSize: false,
        width: '100%',
        maxWidth: 568,
        autoHeight: true,
        helpers: {
            overlay: {
                locked: false // отключаем блокировку overlay
            }
        }

    };

    $('.nav__back-call').fancybox();
    $('.header__btn').fancybox(optionFancybox);
    $('.rent__btn').fancybox(optionFancybox);
    $('.message').fancybox(optionFancybox);

});
