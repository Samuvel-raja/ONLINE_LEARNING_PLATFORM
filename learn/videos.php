<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
$fname = $_POST['fname'];
$lname = $_POST['lname'];
$email = $_POST['email'];
$phone = $_POST['phone'];

if (!empty($fname) && !empty($lname) && !empty($email) && !empty($phone)) {
$host = "localhost";
$dbusername = "root";
$dbpassword = "";
$dbname = "mydata1";

$conn = new mysqli($host, $dbusername, $dbpassword, $dbname);

// Check if the connection was succe
// Create a new MySQLi connectionssful
if ($conn->connect_error) {
die('Connection Error: ' . $conn->connect_error);
} else {
// Prepare and execute a SELECT query to check for existing emails
$SELECT = "SELECT email FROM register WHERE email = ?";
$stmt = $conn->prepare($SELECT);
$stmt->bind_param("s", $email);
$stmt->execute();
$stmt->store_result();

if ($stmt->num_rows > 0) {
echo "<script>window.location.assign('videos.html?error=true');</script>";
} else {
// Prepare and execute an INSERT query to add the user data to the database
$INSERT = "INSERT INTO register (fname, lname, email, phone) VALUES (?, ?, ?, ?)";
$stmt = $conn->prepare($INSERT);
$stmt->bind_param("ssss", $fname, $lname, $email, $phone);
$stmt->execute();
$stmt->close();
$conn->close();
echo "<script>window.location.assign('success.html');</script>";
}
}
}
}
?>
