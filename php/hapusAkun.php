<?php
error_reporting(E_ERROR | E_PARSE);
if (isset($_SERVER['HTTP_ORIGIN'])){
	header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
	header('Access-Control-Allow-Credentials: true');
	header('Access-Control-Max-Age: 86400');
}

if ($_SERVER['REQUEST_METHOD']=='OPTIONS') {
	if(isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
		header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

	if(isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
		header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
	exit(0);
}

require "config.php";

$data = file_get_contents("php://input");
  	if (isset($data)) {
        $request = json_decode($data);
        $email = $request->email;
        $id = $request->id;
    }

$email = stripcslashes($email);
$id = stripcslashes($id);
$sql = "DELETE FROM datauser WHERE email = '$email'";
$sql2 = "DELETE FROM datapembelian WHERE id = '$id'";
mysqli_query($con, $sql);
mysqli_query($con, $sql2);
$response= 1;

?>