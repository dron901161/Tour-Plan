<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$email = $_POST['email'];
$nameModal = $_POST['nameModal'];
$phoneModal = $_POST['phoneModal'];
$emailModal = $_POST['emailModal'];

$subscribeBtn = $_POST['subscribeBtn'];
$footerBtn = $_POST['footerBtn'];
$modalBtn = $_POST['modalBtn'];

if (isset($footerBtn)) {
    $title = "New Appeal";
    $body = "
    <b>Name:</b> $name<br>
    <b>Phone:</b> $phone<br>
    <b>Message:</b><br>$message
    ";
} else if (isset($modalBtn)) {
    $title = "Booking & Send us a feedback";
    $body = "
    <b>Name:</b> $nameModal<br>
    <b>Phone:</b> $phoneModal<br>
    <b>E-mail:</b> $emailModal<br>
    <b>Message:</b><br>$message
    ";
} else {
    $title = "New Subscriber";
    $body = "
    <b>E-mail:</b> $email<br>
    ";
};
// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    // $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

     // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'tourplan344@gmail.com'; // Логин на почте
    $mail->Password   = 'RXAL,Z-2hLtk2EP'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('tourplan344@gmail.com','АНДРЕЙ МЕЖИРИЦКИЙ'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('georgytsetsaridze@yandex.ru');  
    


		// Отправка сообщения
		$mail->isHTML(true);
		$mail->Subject = $title;
		$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
header('location: thankyou.html');

