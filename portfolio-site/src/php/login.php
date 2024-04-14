<?php

require_once('validation.php');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $success = validateCredentials($username, $password);

    $response = array('success' => $success);
    echo json_encode($response);
}

?>