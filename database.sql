CREATE DATABASE IF NOT EXISTS campus_maintenance;

USE campus_maintenance;

CREATE TABLE maintenance_requests (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    student_id VARCHAR(30) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20),
    building VARCHAR(100) NOT NULL,
    room_number VARCHAR(20),
    category VARCHAR(50) NOT NULL,
    description TEXT NOT NULL,
    urgency VARCHAR(20) NOT NULL,
    date_reported DATE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);