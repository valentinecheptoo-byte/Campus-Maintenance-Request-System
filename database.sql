CREATE DATABASE campus_maintenance;
USE campus_maintenance;

CREATE TABLE maintenance_requests (
id INT AUTO_INCREMENT PRIMARY KEY,
fullname VARCHAR(100) NOT NULL,
studentid VARCHAR(30) NOT NULL,
email VARCHAR(100) NOT NULL,
phone VARCHAR(20) NOT NULL,
building VARCHAR(100) NOT NULL,
category VARCHAR(50) NOT NULL,
date_reported DATE NOT NULL,
priority VARCHAR(20) NOT NULL,
description TEXT NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);