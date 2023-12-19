<?php

$success = 0;
$user = 0;
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    include 'connect.php';
    $username = $_POST['username'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];

    $sql = "Select * from `register` where username='$username'";
    $result = mysqli_query($con, $sql);
    if ($result) {
        $num = mysqli_num_rows($result);
        if ($num > 0) {
            $user = 1;
        } else {
            $sql = "insert into `register`(username,email,phone) values('$username','$email','$phone')";
            $result = mysqli_query($con, $sql);
            if ($result) {
                $success = 1;
                header('location:videos.html');
            } else {
                die(mysqli_error($con));
            }
        }
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register</title>
    <link rel="stylesheet" href="register.css">



</head>

<body>
    <nav>
        <img src="https://www.creativefabrica.com/wp-content/uploads/2019/03/Monogram-LL-Logo-Design-by-Greenlines-Studios.jpg"
            alt="" width="50" height="50" style="margin-bottom: 20px;">
        <ul>
            <a href="index.html">
                <li>Home</li>
            </a>
            <a href="Tutorials.html">
                <li>Tutorials</li>
            </a>
            <a href="exercise.html">
                <li>Excercises</li>
            </a>
            <a href="services.html">
                <li>Services</li>
            </a>
        </ul>
    </nav>
    <div class="main-div">
        <div class="container">

            <form action="register.php" method="post">
                <h2 align="center">Register to Watch the Video</h2>
                <div class="field">
                    <label for="fname">User Name</label><br>
                    <input type="text" required name="username">
                </div>
                <div class="field">
                    <label for="email">Email</label><br>
                    <input type="text" required name="email">
                </div>
                <div class="field">
                    <label for="phone">Phone</label><br>
                    <input type="text" required name="phone">
                </div>
                <button type="submit" class="btn">Submit</button>
            </form>
        </div>
    </div>
</body>


</html>