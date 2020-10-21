<?php
	require('./_connect.php');
	header('content-type:text/html;charset=utf-8;');
    //书写sql语句
    $sql = "CREATE TABLE info (
        Id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(300) NOT NULL,
        password VARCHAR(300) NOT NULL
)";
$result = mysqli_query($conn,$sql);
// print_r($result);
if($result){
	echo "用户信息表创建成功";
}else{
	echo "用户信息表创建失败";
}

?>