<?php
?>

<?php
header('content-type:text/html;charset=utf-8;');

$username=$_POST['username'];
$password=$_POST['password'];

$conn=mysqli_connect('localhost','root','','dangdang');
$sql="INSERT INTO `info` VALUES(null,'$username','$password')";
$res=mysqli_query($conn,$sql);
if($res){
    header("location:../pages/login.html");
}
else{
    echo "服务器内部错误";
}
?>
