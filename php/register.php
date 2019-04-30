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
    }

$username = stripslashes($username);
$password = stripslashes($password);
$sql = "INSERT INTO datauser (username, email, password) VALUES ('$username', '$emailadd', '$password')";
if ($con->query($sql) === TRUE) {
  $response= 1;
} else {
  $response= "Error: " . $sql . "<br>" . $db->error;
}
 echo json_encode($response);

?>