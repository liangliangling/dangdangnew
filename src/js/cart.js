window.onload=function(){
    $(".quanxuan").click(
        function(){
            $(".quanxuan").attr("checked","checked")
        }
    )
    //展示购物车
    showTbody();
    function showTbody(){
        $.ajax({
            url: "../interface/showlist.php",
            success: function (res) {
                // console.log(res.data[0])
                // console.log(res.data[0].product_price)
                if (res.code) {
                    var arr = res.data;
                    if (res.data) {
                        // console.log(arr.length)
                        var price=res.data[0].product_price
                        $(".zongji span").html(price)
                        //如果有商品,table显示,div隐藏
                        $('.shangpin table').show();
                        $('.empty').hide();
                        //在table里面展示商品信息
                        $('.shangpin table').empty();
                        var id;
                        $.each(arr, function (index, item) {
                            id=item.id
                            $('.shangpin table').append(`<tr id="${item.product_id}">
                            <td class="xuanz"><input type="checkbox" class="xuanzhong" checked></td>
                            <td class="tupian"><img src=${item.product_img} alt="" width="80px"></td>
                            <td class="biaoti"><span>${item.product_name}</span></td>
                            <td class="cuxiao">
                                <p>￥${item.product_price}</p>
                                <i>促销</i>
                            </td>
                            <td class="cengshan">
                                <i>-</i><span>1</span><i>+</i>
                            </td>
                            <td class="jinqian">￥<span>${item.product_price}</span></td>
                            <td class="shouc"><i>移入收藏</i>
                                <i>删除</i></td>
                        </tr>`)
                        })
                        $(".duoshao span").html(arr.length)
                        $(".shouc i").eq(1).click(
                            function(){
                                console.log(111)
                               $(this).parents().parents().eq(0).remove()
                            //    console.log($(this).parents().parents().attr("id"))
                            //    id=$(this).parents().parents().attr("id")
                               arr.length--;
                               $(".duoshao span").html(arr.length)
                               $.ajax({
                                url:"../interface/updatewq.php",
                                data:{
                                    id:id,
                                    type:"del"
                                },
                                success:function(res){
                                    if(res){
                                        alert("删除成功")
                                    }
                                },
                                error:function(){
                                    console.log("删除失败")
                                }
                               })
                            }
                        )
                        $(".cengshan i").eq(0).click(function(){
                            var num=$(".cengshan span").html();
                            num--
                            if(num<=1){
                                    num=1; 
                                    $(".cengshan span").html(num);
                                    var price=res.data[0].product_price
                                    price=price*num
                                    $(".zongji span").html(price)
                            }
                            $(".cengshan span").html(num);
                            var price=res.data[0].product_price
                            price=price*num
                            $(".zongji span").html(price)
                        })
                        $(".cengshan i").eq(1).click(function(){
                            var num=$(".cengshan span").html();
                            num++
                            $(".cengshan span").html(num);
                            console.log(num)
                            var price=res.data[0].product_price
                            price=price*num
                            $(".zongji span").html(price)
                        })
                    }
                } 
                else {
                    //如果没有商品,table隐藏,div显示
                    $('.shangpin table').hide();
                    $('.empty').show();
                }
            },
            dataType: 'json',
            cache: false
        })
    }
}