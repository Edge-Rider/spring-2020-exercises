<?php


session_start();

if ($_POST) {
    $email = $_POST['email'] ?? null;

    // same as above
    $email = !empty($_POST['email']) ? $_POST['email'] : null;

    // also same as above
    if (isset($_POST['email']) && $_POST['email']) {
        $email = $_POST['email'];
    } else {
        $email = null;
    }

    $password = $_POST['password'] ?? null;

    $query  = "
        SELECT *
        FROM `users`
        WHERE `email` = $email
    ";

    // execute the query...

    // find the saved password hash
    $stored_password_hash; // okshmdgjdgmkdfmjfdjkldjkdfhdnfkgdfk

    // hash the password from the form in the same way
    $submitted_password_hash = password_hash($password, PASSWORD_BCRYPT);

    // compare the stored hash with the hash from the submitted version
    if (0 === strcmp($stored_password_hash, $submitted_password_hash)) {
        // login
        $_SESSION['logged_in_user'] = 1; // if user id = 1
    } else {
        // no no
    }
}

// $_SESSION['start'] = date('H:i:s');

// logout
unset($_SESSION['logged_in_user']);

var_dump($_SESSION);

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <form action="" method="post">
    
        <input type="email" name="email" placeholder="Email">
        <br>
        <br>

        <input type="password" name="password" placeholder="Password">
        <br>
        <br>

        <input type="submit" value="Log In">

    </form>
    
</body>
</html>