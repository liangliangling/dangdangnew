// console.log(location.search.slice(4,5))
// console.log(location.search.split("="))

//广告5秒以后上滑100px


window.onload = function () {
var timer;
    $(".wdedan")[0].onmouseenter=function(){
        $(".wdedangdang")[0].style.zIndex=2
        $(".wdedangdang")[0].style.display="block"
    }
    $(".wdedan")[0].onmouseleave=function(){
        $(".wdedangdang")[0].style.display="none"
    }
    $(".lingwu")[0].onmouseenter=function(){
        $(".ling")[0].style.zIndex=2
        $(".ling")[0].style.display="block"
    }
    $(".lingwu")[0].onmouseleave=function(){
        $(".ling")[0].style.display="none"
    }
    $(".caigou")[0].onmouseenter=function(){
        $(".cai")[0].style.zIndex=2
        $(".cai")[0].style.display="block"
    }
    $(".caigou")[0].onmouseleave=function(){
        $(".cai")[0].style.display="none"
    }
    $('.kehufuwu')[0].onmouseenter=function(){
        $('.kehuf')[0].style.zIndex=2
        $('.kehuf')[0].style.display="block"
    }
    $('.kehufuwu')[0].onmouseleave=function(){
        $('.kehuf')[0].style.display="none"
    }
$(".meaufenlei").hover(
    function(){
        $(".yijione").css("display","none")
    },
    function(){
        // $(".yijione").css("display","none")
    }
)
    $(".yijione").hover(
        function(){
            $(".yijione").css("display","block")
    // console.log($(this).children().eq(1).children().eq(1)[0])
    $(this).children().eq(1)[0].style.display="block"
    $(this).children().eq(1).children().eq(1)[0].style.display="block"
        },
        function(){
            $(".yiji ul").css("display","none");
            $(".yijione").css("display","none");
        })
    $(".sanji").hover(
    function(){
        $(".yijione").css("display","block")
    },
    function(){
        $(".yijione").css("display","none")
    })
 // 输入节流
 var flag = false;//记录是否是英文输入法

 $('input').on('compositionstart',function(){
     flag = true;
 });
 $('input').on('compositionend',function(){
     getData($('input').val());
     flag = false
 })

 $('input').on('input',function(){
     if(!flag){
         getData($('input').val())
     }
 })
 $('input').blur(function(){
     $('.lianx').empty();
 })
 function getData(text){
     $.ajax({
         url:"https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&from=pc_web&sugsid=32757,32617,1448,32790,7545,31660,32705,32230,7517,7605,32117,32718&req=2&bs=%E5%9C%A8%E7%BA%BF%E7%BF%BB%E8%AF%91&pbs=%E5%9C%A8%E7%BA%BF%E7%BF%BB%E8%AF%91&csor=2",
         jsonp:'cb',
         data:{
             wd:text
         },
         dataType:'jsonp',
         success:function(res){
             $('.lianx').empty()
             if(res.g){
                 $.each(res.g,function(i,v){
                     $('.lianx').append('<li>'+v.q+'</li>')
                     $(".lianx").css("cursor","pointer")
                 })
                 $(".lianx li").hover(
                    function(){
            //console.log($(this).eq(0)[0])
               $(this).eq(0).css("color","#ff2832")
                    },
                    function(){
                        $(".lianx li").css("color","#323232")
                    })
             }
         }   
     })}

    //购物数量的添加
    $(".tianjia").click(function(){
        var num=$(".numbtn>span").html()
        num++;
        $(".numbtn>span").html(num);
    })
    $(".jianshao").click(function(){
        var num=$(".numbtn>span").html()
        num--;
        if(num<=0){
            num=1;
        }
        else{
            $(".numbtn>span").html(num);
        }
    })


     //获取商品信息生成不同的详情页
        var id=parseInt(location.search.slice(4,6))
        var price=parseFloat(location.search.slice(12))
        var text;
        $(".tejiaone span").html(price)
        var url="../interface/detail.json"
        // console.log(id,price)
        getindex();
        function getindex(){
            $.ajax({
                url: url,
                success: function (res){
                    var data=res
                    console.log(data)
                    if (res){
                        $(".show ul").empty()
                        
                        $.each(data,function(index,item){
                            if(id==item.id){
                                $(".show ul").append(`
                                <li class="10"><a href="javascript:;"><img src=${item.path1_1} alt=""></a></li>
                                <li class="11"><a href="javascript:;"><img src=${item.path1_2} alt=""></a></li>
                                <li class="12"><a href="javascript:;"><img src=${item.path1_3} alt=""></a></li>
                                <li class="13"><a href="javascript:;"><img src=${item.path1_4} alt=""></a></li>
                                <li class="14"><a href="javascript:;"><img src=${item.path1_5} alt=""></a></li>
                                `)
                                $(".title span").html(item.text)
                                text=item.text;
                                $(".uushow").empty()
                                $(".uushow").append(`
                                <img src=${item.path1} alt="" id="1">
                                <img src=${item.path2} alt="" id="2">
                                <img src=${item.path3} alt="" id="3">
                                <img src=${item.path4} alt="" id="4">
                                <img src=${item.path5} alt="" id="5">
                                `)
                                $(".show>img").hover(
                                    function(){
                                        $(".mask").css("display","block")
                                        $(".uushow").css("display","block")
                                        $(".uushow").css("zIndex",3)
                                        bigImg.style.zIndex=3
                                    },
                                    function(){
                                       // $(".mask").css("display","none")
                                    })
                                    var bigImg;
                                $(".show ul li").hover(
                                    function(){
                                        // console.log($(this).index()+1)
                                        var index=$(this).index()+1
                                    // console.log(index)
                                    // console.log($(this).parents().parents().eq(0).children().eq(3).children().eq(index-1))
                                    if(index){
                                        $(".uushow>img").css("display","none")
                                        $(this).parents().parents().eq(0).children().eq(3).children().eq(index-1).css("display","block")
                                        // $(".uushow>img").attr("src",item.path1)
                                        bigImg=$(".uushow>img")[index]
                                    }
                                    }
                                )
                            }
        
                       })
                    }

                     //详情页下边的图
//  $(".show ul li ").hover(
//     function(){
//           var index=$(this).index()
//           console.log(index+1)
// //             index=index+10;
// //             $(".show>img").attr("src","../images/detail/"+index+".jpg")
//           $(".uushow>img").attr("src","../images/detail/u_"+index+".jpg")
// //          },
// //          function(){
//       })

//          //详情中放大的效果
      var box=$(".show")[0]
      var mask=$(".mask")[0]
      var small=$(".show>img")[0]
      bigImg=$(".uushow>img")[0]
      console.log(bigImg)
$(".show").hover(
  function(){

  },
  function(){
  $(".mask").css("display","none")
  $(".uushow").css("display","none")  
  }
)
     mask.onmousemove = function (e) {
      var event = e || window.event;
      var x = event.clientX + getScroll().left - box.offsetLeft - mask.offsetWidth / 2;
      var y = event.clientY + getScroll().top - box.offsetTop - mask.offsetHeight / 2;
      if (x < 0) {
          x = 0;
      }
      if (x > small.offsetWidth - mask.offsetWidth) {
          x = small.offsetWidth - mask.offsetWidth;
      }
      if (y < 0) {
          y = 0;
      }
      if (y > small.offsetHeight - mask.offsetHeight) {
          y = small.offsetHeight - mask.offsetHeight;
      }
      mask.style.left = x + "px";
      mask.style.top = y + "px";
      var left = x / small.offsetWidth * bigImg.offsetWidth;
      var top = y / small.offsetHeight * bigImg.offsetHeight;
      bigImg.style.left = -left + "px";
      bigImg.style.top = -top + "px";
  }
                },
                error: function () {
                    alert("获取失败")
                },
                dataType: 'json'
            })
        }

    //购物车功能
    //点击购物车,把商品加入数据库
    var img="../images/gouwuchetu/"+id+".jpg"
    $('.add').click(function () {
        $.ajax({
            url: "../interface/addwq.php",
            data: {
                id: id,
                name:text,
                price: price,
                img: img,
                num: $(".numbtn>span").html()
            },
            success: function (res) {
                if (res.code) {
                    alert('商品加入成功')
                }
            },
            error: function () {
                alert("加入失败")
            },
            dataType: 'json'
        })
    })
}