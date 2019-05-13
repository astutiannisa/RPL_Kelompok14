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
        $username = $request->username;
        $jmlh_racing = $request->jmlh_racing;
        $jmlh_turbo = $request->jmlh_turbo;
        $jmlh_pertamax = $request->jmlh_pertamax;
        $total_harga = $request->total_harga;
    }

      $username= mysqli_real_escape_string($con,$username);
      $total_harga= mysqli_real_escape_string($con,$total_harga);
      $jmlh_racing= mysqli_real_escape_string($con, $jmlh_racing);
      $jmlh_turbo= mysqli_real_escape_string($con, $jmlh_turbo);
      $jmlh_pertamax= mysqli_real_escape_string($con, $jmlh_pertamax);

      $jmlh_racing = stripcslashes($jmlh_racing);
      $jmlh_turbo = stripcslashes($jmlh_turbo);
      $jmlh_pertamax = stripslashes($jmlh_pertamax);
      $username = stripslashes($username);
      $total_harga = stripslashes($total_harga);

    $sql = "INSERT INTO datapembelian (id, jmlh_racing, jmlh_turbo, jmlh_pertamax, total_harga) VALUES ((SELECT id FROM datauser WHERE username ='$username'), '$jmlh_racing', '$jmlh_turbo', '$jmlh_pertamax','$total_harga');";
      if ($con->query($sql) === TRUE) {
        $response= 1;
            } else {
            $response= "Error: " . $sql . "<br>" . $db->error;
            }
    echo json_encode($response);
      ?>