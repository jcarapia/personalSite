<?php

    // Get the form fields, removes html tags and whitespace.
    $name = strip_tags(trim($_POST["name"]));
    $name = str_replace(array("\r","\n"),array(" "," "),$name);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    // Check the form data.
    if (empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        header("Location: https://www.jorgecarapia.herokuapp.com/index.php?success=-1#form");
        exit;
    }

    // Email address.
    $recipient = "jcarapia83@gmail.com";

    // Email subject.
    $subject = "New contact from $name";

    // Email content.
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";

    // Email headers.
    $email_headers = "From: $name <$email>";

    // Send email.
    mail($recipient, $subject, $email_content, $email_headers);
    
    // Redirect to the index.html page with success code
    header("Location: https://www.jorgecarapia.herokuapp.com/index.php?success=1#form");

?>