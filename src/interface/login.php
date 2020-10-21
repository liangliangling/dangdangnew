<?php
header('content-type:text/html;charset=utf-8;');
$username=$_POST['username'];
$password=$_POST['password'];

$conn=mysqli_connect('localhost','root','','dangdang');
$sql="SELECT * FROM `info` WHERE `username`='$username' AND `password`='$password'";
$res=mysqli_query($conn,$sql);
$row=mysqli_fetch_assoc($res);
mysqli_close($conn);
if($row){
    header("location:../pages/index.html");
}
else{
    echo '密码或用户名错误';
}
?>