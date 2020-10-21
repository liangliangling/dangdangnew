<?php
//获取前端的参数
$id_new = $_REQUEST['id'];//商品id
$price_new = $_REQUEST['price'];//商品price

$id=json_encode($id_new);
$price=json_encode($price_new);

$arr=json_encode(array("id"=>$id_new,"price"=>$price_new));

echo $arr;
// echo $price;

// array("code"=>1,"data"=>$arr)
?>