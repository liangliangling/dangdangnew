<?php
$servername = "127.0.0.1";
$username = "root";
$password = "";
$dbname = "dangdang";

//创建连接
$conn = mysqli_connect($servername,$username,$password,$dbname);
if(mysqli_connect_error()){
	die('连接失败');
}

?>