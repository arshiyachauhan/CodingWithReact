<h2>Event Registration Form</h2>    

<?php if (!empty($success)): ?>
    <p style="color:green;"><?php echo $success; ?></p>
<?php endif; ?>

<form action="" method="POST">
    <label for="full_name">Full Name: <span class="required">*</span></label>
    <input type="text" name="full_name" id="full_name" value="<?php echo isset($fullName) ? htmlspecialchars($fullName) : ''; ?>">
    <span style="color:red;"><?php echo $errors['full_name'] ?? ''; ?></span>
    <br><br>

    <label for="email">Email: <span class="required">*</span></label>
    <input type="email" name="email" id="email" value="<?php echo isset($email) ? htmlspecialchars($email) : ''; ?>">
    <span style="color:red;"><?php echo $errors['email'] ?? ''; ?></span>
    <br><br>

    <label for="contact_number">Contact Number: <span class="required">*</span></label>
    <input type="text" name="contact_number" id="contact_number" value="<?php echo isset($contactNumber) ? htmlspecialchars($contactNumber) : ''; ?>">
    <span style="color:red;"><?php echo $errors['contact_number'] ?? ''; ?></span>
    <br><br>

    <label for="event_date">Event Date: <span class="required">*</span></label>
    <input type="date" name="event_date" id="event_date" value="<?php echo isset($eventDate) ? htmlspecialchars($eventDate) : ''; ?>">
    <span style="color:red;"><?php echo $errors['event_date'] ?? ''; ?></span>
    <br><br>

    <label for="attendees">Number of Attendees: <span class="required">*</span></label>
    <input type="number" name="attendees" id="attendees" value="<?php echo isset($attendees) ? htmlspecialchars($attendees) : ''; ?>">
    <span style="color:red;"><?php echo $errors['attendees'] ?? ''; ?></span>
    <br><br>

    <label for="comments">Comments (Optional, max 200 characters):</label>
    <textarea name="comments" id="comments" maxlength="200"><?php echo isset($comments) ? htmlspecialchars($comments) : ''; ?></textarea>
    <span style="color:red;"><?php echo $errors['comments'] ?? ''; ?></span>
    <br><br>

    <button type="submit">Submit</button>
</form>

</body>
</html>
<!DOCTYPE html>
<html>
<head>
    <title>PHP Cookie Example</title>
</head>
<body>

<?php
$cookie_name = "user";
$cookie_value = "Arshiya";
$cookie_expiry = time() + (86400 * 30);
setcookie($cookie_name, $cookie_value, $cookie_expiry, "/");

if(isset($_COOKIE[$cookie_name])) {
    echo "Cookie '" . $cookie_name . "' is set!<br>";
    echo "Value is: " . $_COOKIE[$cookie_name];
} else {
    echo "Cookie named '" . $cookie_name . "' is not set!";
}
?>

</body>
</html>
