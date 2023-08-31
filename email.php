<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './PHPMailer/src/Exception.php';
require './PHPMailer/src/PHPMailer.php';
require './PHPMailer/src/SMTP.php';

if(isset($_POST['send'])){
    $name = htmlentities($_POST['name']);
    $email = htmlentities(!empty($_POST['email']) ? $_POST['email'] : 'NA');
    $phone = htmlentities($_POST['phone']);
    $message = htmlentities($_POST['message']);
    $subject = "You have received a new mail";

    try {
        $mail = new PHPMailer(true);
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'sabahamk123@gmail.com';
        $mail->Password = 'vbykbhhvckynzoxy';
        $mail->Port = 465;
        $mail->SMTPSecure = 'ssl';
        $mail->isHTML(true);
        $mail->setFrom('zabaaabdulla@gmail.com');
        $mail->addAddress('zabaaabdulla@gmail.com');
        $mail->Subject = "$subject from $name";

        $mail->Body =
        "Name: " . $name . "<br>" .
        "Phone: " . $phone . "<br>" .
        "Email: " . $email . "<br>" .
        "Message: " . $message;

        $mail->send();
        $status = "success";
        $response = "Email sent successfully!";
    } catch (Exception $e) {
        $status = "failed";
        $response = "Something went wrong: " . $mail->ErrorInfo;
    }

    header('Location: index.html');
    exit();
}
?>
