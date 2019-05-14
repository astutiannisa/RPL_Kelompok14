<?php
error_reporting(E_ERROR | E_PARSE);
if (isset($_SERVER['HTTP_ORIGIN'])) {
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');    // cache for 1 day
    }

    // Access-Control headers are received during OPTIONS requests

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
        $emailadd = $request->email;
        $password = $request->password;
        $username = $request->username;
        $alamat = $request->alamat;
    }

$username = stripslashes($username);
$password = stripslashes($password);
$emailadd = stripcslashes($emailadd);

$sql = "INSERT INTO datauser (username, email, password, alamat) VALUES ('$username', '$emailadd', '$password', '$alamat')";

$sql_check = mysqli_query($con, "SELECT email FROM datauser WHERE email = '$emailadd'");

if (mysqli_num_rows($sql_check)) {
  $response= 0;
} else {
  mysqli_query($con, $sql);
  $response= 1;
}
 echo json_encode($response);

?>