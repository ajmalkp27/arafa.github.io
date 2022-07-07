<?php


$name = $_POST['name'];
$visitor_email = $_POST['email-'];
$subject = $_POST['subject'];
$message = $_POST['message'];


$email_from = 'arafatraders.com';

$email_subject = 'New form Submission';

$email_body = "user Name: $name.\n".
                "User Email: $visitor_email.\n".
                "Subject: $subject.\n".
                "User message : $message.\n".;
$to = 'ajkp007@gmail.com';
$header = "From : $email_from \r\n";
$headers.= "Reply-To: $visitor_email \r\n";
mail($to,$email_subject,$email_body,$headers);
header("Location:index.html");
?>
