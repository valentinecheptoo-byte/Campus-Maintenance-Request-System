<?php

$servername = "localhost";
$username = "root";
$password = "";
$database = "campus_maintenance";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$full_name = $_POST['full_name'];
$student_id = $_POST['student_id'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$building = $_POST['building'];
$room_number = $_POST['room_number'];
$category = $_POST['category'];
$description = $_POST['description'];
$urgency = $_POST['urgency'];
$date_reported = $_POST['date_reported'];

$sql = "INSERT INTO maintenance_requests
(full_name, student_id, email, phone, building, room_number, category, description, urgency, date_reported)

VALUES
('$full_name','$student_id','$email','$phone','$building','$room_number','$category','$description','$urgency','$date_reported')";

if ($conn->query($sql) === TRUE) {
    echo "<h2>Maintenance request submitted successfully!</h2>";
} else {
    echo "Error: " . $conn->error;
}

$conn->close();

?>