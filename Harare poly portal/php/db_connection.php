<?php

// Database configuration
$dbHost = "127.0.0.1"; //  database host
$dbUsername = "root"; //  database username
$dbPassword = ""; //  database password
$dbName = "hararepoly"; //  database name

// Creating a database connection
$conn = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}




