<?php
$errors = [];
$success = "";

// Function to sanitize inputs
function sanitize_input($data) {
    $data = trim($data);  // Remove unnecessary spaces
    $data = stripslashes($data);  // Remove slashes
    $data = htmlspecialchars($data);  // Convert special characters to HTML entities
    return $data;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fullName = sanitize_input($_POST['full_name']);
    $email = filter_var(sanitize_input($_POST['email']), FILTER_SANITIZE_EMAIL);
    $contactNumber = sanitize_input($_POST['contact_number']);
    $eventDate = sanitize_input($_POST['event_date']);
    $attendees = sanitize_input($_POST['attendees']);
    $comments = sanitize_input($_POST['comments']);

    // Validation
    if (empty($fullName)) {
        $errors['full_name'] = "Full name is required.";
    }

    if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors['email'] = "A valid email is required.";
    }

    if (empty($contactNumber)) {
        $errors['contact_number'] = "Contact number is required.";
    }

    $currentDate = date("Y-m-d");
    if (empty($eventDate)) {
        $errors['event_date'] = "Event date is required.";
    } elseif ($eventDate <= $currentDate) {
        $errors['event_date'] = "Event date must be greater than today's date.";
    }

    if (empty($attendees)) {
        $errors['attendees'] = "Number of attendees is required.";
    } elseif (!filter_var($attendees, FILTER_VALIDATE_INT, ["options" => ["min_range" => 1]])) {
        $errors['attendees'] = "Number of attendees must be a positive number.";
    }

    if (!empty($comments) && strlen($comments) > 200) {
        $errors['comments'] = "Comments should not exceed 200 characters.";
    }

    if (empty($errors)) {
        $success = "Registration successful!";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Registration</title>
    <style>
        .required {
            color: red;
        }
    </style>
</head>
<body>

