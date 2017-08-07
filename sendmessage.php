<?php
$sendto   = "artzayavka@yandex.ru";
$name  = nl2br($_POST['name']);
$phone = $_POST['phone'];
$email = $_POST['email'];
$order_type = $_POST['order_type'];
// Формирование заголовка письма
$subject  = "Новая заявка Art Craft";
$headers  = "From: info@artcraft.dance\r\n";
$headers .= "Reply-To: info@artcraft.dance\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html;charset=utf-8 \r\n";
// Формирование тела письма
$msg  = "<html><body style='font-family:Arial,sans-serif;'>";
$msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>Новая заявка (Art Craft)</h2>\r\n";
if (isset($_POST['name']))
{
$msg .= "<p><strong>Имя:</strong> ".$name."</p>\r\n";
}
if (isset($_POST['phone']))
{
$msg .= "<p><strong>Телефон:</strong> ".$phone."</p>\r\n";
}
if (isset($_POST['email']))
{
$msg .= "<p><strong>E-mail:</strong> ".$email."</p>\r\n";
}
if (isset($_POST['order_type']))
{
$msg .= "<p><strong>Тип заказа:</strong> ".$order_type."</p>\r\n";
}
$msg .= "</body></html>";
// отправка сообщения
if (@mail($sendto, $subject, $msg, $headers))   {
	echo "true";
} else {
	echo "false";
}
?>
