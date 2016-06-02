$(document).ready(function () {
    $('form').submit(function () {
        var formID = $(this).attr('id'); // Получение ID формы
        var formNm = $('#' + formID);
        $.ajax({
            type: 'POST',
            url: 'mail.php', // Обработчик формы отправки
            data: formNm.serialize(),
            success: function (data) {
                // Вывод текста результата отправки в текущей форме
                $('.popup__message').click();
            }
        });
        return false;
    });

    $("input[name='phone']").mask("+9(999) 999-9999");
});
