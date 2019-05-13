<?php
error_reporting(E_ERROR | E_PARSE);
if (isset($_SERVER['HTTP_ORIGIN'])) {
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');
    }

    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");        
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
        exit(0);
    }

  require "config.php";
    $data = file_get_contents("php://input");
    if (isset($data)) {
        $request = json_decode($data);
        $email = $request->email;
        $password = $request->password;
    }
      $email= mysqli_real_escape_string($con,$email);
      $password = mysqli_real_escape_string($con,$password);
      $email = stripslashes($email);
      $password = stripslashes($password);

    $sql = "SELECT username FROM datauser WHERE email = '$email' and password = '$password'";
      $result = mysqli_query($con, $sql);
      $row = mysqli_fetch_array($result,MYSQLI_ASSOC);

      $response = $row['username'];
      echo $response;
      ?>