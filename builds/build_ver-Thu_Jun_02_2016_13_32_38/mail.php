<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['name'])) {$name = $_POST['name'];}
    if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
    if (isset($_POST['text'])) {$text = $_POST['text'];}
    if (isset($_POST['formData'])) {$formData = $_POST['formData'];}
    $to = "adreeua@gmail.com"; /*Укажите ваш адрес электронной почты*/
    $headers = "Content-type: text/plain; charset = utf-8";
    $subject = "$formData";
    $message = "$formData\n\nИмя: $name \n\nТелефон: $phone \n\n$text";
    // $message = "
    //     <table style='width: 100%;'>
    //         <tr style='background-color: #f8f8f8;'>
    // 			<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Тема</b></td>
    // 			<td style='padding: 10px; border: #e9e9e9 1px solid;'>$formData</td>
    // 		</tr>
    //         <tr style='background-color: #f8f8f8;'>
    // 			<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Имя</b></td>
    // 			<td style='padding: 10px; border: #e9e9e9 1px solid;'>$name</td>
    // 		</tr>
    //         <tr style='background-color: #f8f8f8;'>
    // 			<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Телефон</b></td>
    // 			<td style='padding: 10px; border: #e9e9e9 1px solid;'>$phone</td>
    // 		</tr>
    //         <tr style='background-color: #f8f8f8;'>
    // 			<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Сообщение</b></td>
    // 			<td style='padding: 10px; border: #e9e9e9 1px solid;'>$text</td>
    // 		</tr>
    //     </table>
	// 	";
    $send = mail ($to, $subject, $message, $headers);
    if ($send == 'true')
    {
    echo "<center>Спасибо за отправку вашего сообщения!</center>";
    }
    else
    {
    echo "<center><b>Ошибка. Сообщение не отправлено!</b></center>";
    }
} else {
    http_response_code(403);
    echo "Попробуйте еще раз";
}
?>
