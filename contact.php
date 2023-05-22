<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $phone = $_POST['PhoneNumber']; // Retrieve the phone number value
  $message = $_POST['message'];

  // Validate and process the form data
  // ...
  // Perform necessary actions like sending an email

  // Example: Sending an email
  $to = "your-email@example.com";
  $subject = "New contact form submission";
  $body = "Name: $name\nEmail: $email\nPhone: $phone\nMessage: $message"; // Include the phone number in the email body
  $headers = "From: $email";

  if (mail($to, $subject, $body, $headers)) {
    echo "Thank you! Your message has been sent.";
  } else {
    echo "Oops! Something went wrong.";
  }
}
?>
