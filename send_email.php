<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Include PHPMailer files
require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize form inputs
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    $mail = new PHPMailer(true);

    try {
        // SMTP configuration
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'rcanitsilchar@gmail.com'; // Your Gmail address
        $mail->Password = 'yisk pgnv xdch fpjk'; // Your App Password
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        // Recipients
        $mail->setFrom($email, $name);
        $mail->addAddress('rcanitsilchar@gmail.com'); // Recipient's email

        // Content
        $mail->isHTML(true);
        $mail->Subject = 'New Contact Form Submission';
        $mail->Body    = "Name: $name<br>Email: $email<br>Message: $message";

        // Send the email
        $mail->send();
        echo 'Mail sent successfully!';
    } catch (Exception $e) {
        echo "Mail could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
} else {
    header("Location: contact_form.html");
    exit();
}
?>
