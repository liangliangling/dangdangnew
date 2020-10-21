<?php
require('./_connect.php');
header('content-type:text/html;charset=utf-8;');
$sql = "CREATE TABLE info (
			`id` int(11) NOT NULL AUTO_INCREMENT,
			`username` VARCHAR(255) NOT NULL,
			`password` VARCHAR(255) NOT NULL,
			`submission_date` TIMESTAMP	
)";
$result = mysqli_query($conn,$sql);
if($result){
	echo "用户表创建成功";
}else{
	echo "用户表创建失败";
}

?>