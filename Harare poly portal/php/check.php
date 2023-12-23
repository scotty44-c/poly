<?php
 // database connection file
 include("db_connnection.php"); 

// Function to sanitize input
function sanitizeInput($input)
{
   
    return htmlspecialchars($input, ENT_QUOTES, 'UTF-8');
}

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
   
  // database connection file
    include("db_connection.php"); 

    // Get form data and sanitize inputs
    $nationalID = sanitizeInput($_POST["national_id"]);
    $studentID = sanitizeInput($_POST["student_id"]);
    $password = sanitizeInput($_POST["password"]);
    $departmentID = sanitizeInput($_POST["options"]); 
    $level = sanitizeInput($_POST["options"]);

    // Hash the password (you should use a secure hashing algorithm)
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    // SQL query to insert data into the Students table
    $insertQuery = "INSERT INTO Students (NationalID, StudentID, Password, DepartmentID,course_level)
                    VALUES ('$nationalID', '$studentID', '$hashedPassword', '$departmentID'), '$level'";

    // Execute the query
    if (mysqli_query($conn, $insertQuery)) {
        echo "Record inserted successfully";
    } else {
        echo "Error: " . $insertQuery . "<br>" . mysqli_error($conn);
    }

    // Close the database connection
    mysqli_close($conn);
}

?>
