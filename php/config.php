<?php
define ('HOST', 'localhost');
define ('USER', 'root');
define ('PASS', '');
define ('DB', 'fuelly_database');

$con = mysqli_connect(HOST, USER, PASS, DB);
if (!$con) {
	die("Error while connection to database".mysqli_connect_error());
}
?>