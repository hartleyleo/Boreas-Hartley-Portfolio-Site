<?php

$type     = 'mysql';                             // Type of database
$server   = '192.185.2.183';                    // Server the database is on
$db       = 'hartleyl_bo_portfolio_site';      // Name of the database
$port     = '3306';                           // Port is usually 3306 in Hostgator
$charset  = 'utf8mb4';                       // UTF-8 encoding using 4 bytes of data per char

$username = 'hartleyl_bo-user';                // Enter YOUR cPanel username and user here
$password = 'boreasportfolio123';

$options  = [                        // Options for how PDO works
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];                                                                  // Set PDO options

// DO NOT CHANGE ANYTHING BENEATH THIS LINE
$dsn = "$type:host=$server;dbname=$db;port=$port;charset=$charset"; // Create DSN
try {                                                               // Try following code
    $pdo = new PDO($dsn, $username, $password, $options);           // Create PDO object
} catch (PDOException $e) {                                         // If exception thrown
    throw new PDOException($e->getMessage(), $e->getCode());        // Re-throw exception
}

function pdo(PDO $pdo, string $sql, array $arguments = null)
    {
            if (!$arguments) {                   // If no arguments
            return $pdo->query($sql);        // Run SQL and return PDOStatement object
            }
            $statement = $pdo->prepare($sql);    // If arguments prepare statement
            $statement->execute($arguments);     // Execute statement
            return $statement;                   // Return PDOStatement object
    }

header('Content-Type: application/json');

$ID = $_POST['ID'] ?? '';
$link = $_POST['link'] ?? '';
$title = $_POST['title'] ?? '';
$descrip = $_POST['descrip'] ?? '';
$category = $_POST['category'] ?? '';

try {
    $sql = "INSERT INTO images (ID, title, descrip, category, link)
            VALUES (?, ?, ?, ?, ?)";
    $stmt = $pdo->prepare($sql);

    // Bind values to prevent SQL injection
    $stmt->bindParam(0, $ID, PDO::PARAM_STR);
    $stmt->bindParam(1, $title, PDO::PARAM_STR);
    $stmt->bindParam(2, $descrip, PDO::PARAM_STR);
    $stmt->bindParam(3, $category, PDO::PARAM_STR);
    $stmt->bindParam(4, $link, PDO::PARAM_STR);

    // Execute the prepared statement with bound values
    $stmt->execute();

    $message = 'Image data inserted successfully!';
    $response = array('message' => $message);
    echo json_encode($response);
} catch(PDOException $e) {
    $message = 'Error inserting data: ' . $e->getMessage();
    $response = array('message' => $message);
    echo json_encode($response);
}

?>