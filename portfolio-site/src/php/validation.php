<?php

// NOT USED FOR LOGIN FORM
function validateUsernameLength($username, $minLength, $maxLength) {
    $length = strlen($username);
    return $length >= $minLength && $length <= $maxLength;
}

// NOT USED FOR LOGIN FORM
function validateNumberRange($number, $min, $max) {
    
    if (!is_numeric($number)) {
        return false;
    }
    
    $number = floatval($number);
    return $number >= $min && $number <= $max;
}

// NOT USED FOR LOGIN FORM
function validateOptionSelection($value, $validOptions) {
    return in_array($value, $validOptions);
}

function validateCredentials($username, $password) {
    return $username === 'csc372' && $password === 'hartley'; 
}

?>
