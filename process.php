<?php

// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$database = "campus_maintenance";

$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get data from the form
$fullname = $_POST['fullname'];
$studentid = $_POST['studentid'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$building = $_POST['building'];
$category = $_POST['category'];
$date = $_POST['date'];
$priority = $_POST['priority'];
$description = $_POST['description'];

// Insert data into database
$sql = "INSERT INTO maintenance_requests
(fullname, studentid, email, phone, building, category, date_reported, priority, description)

VALUES
('$fullname','$studentid','$email','$phone','$building','$category','$date','$priority','$description')";

if ($conn->query($sql) === TRUE) {
    echo "<h2>Maintenance request submitted successfully!</h2>";
    echo "<a href='index.html'>Go Back</a>";
} else {
    echo "Error: " . $conn->error;
}

$conn->close();

?>