<?php

/* https://api.telegram.org/bot1895773906:AAHod2ZN8-rrgSrP0_9cIUCNcD_tT036ozc/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$message = $_POST['user_message'];
$token = "18957:AAHod2ZN8-rrgSrP0_9cIUCNcD_tT036ozc";
$chat_id = "405741288";


$arr = array(
  'Імя : ' => $name,
  'Телефон: ' => $phone,
  'Повідомлення: '=> $message
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};



$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thank-you.html');
} else {
  echo "Error";
}
;

?>
