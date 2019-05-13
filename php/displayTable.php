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
        $id = $request->id;
    }
    $id= mysqli_real_escape_string($con,$id);
    $id = stripslashes($id);
    $sql = "SELECT * FROM datapembelian WHERE id = '$id'";
    $result = mysqli_query($con,$sql);
    $respone = array();
    while($row = mysqli_fetch_array($result)) {
    	array_push($respone, array("racing"=>$row[2],
    		"turbo"=>$row[3],
    		"pertamax"=>$row[4],
    		"harga"=>$row[5]
    ));
    }

echo json_encode($respone);
mysqli_close($db)
?>