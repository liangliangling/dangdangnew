//广告5秒以后上滑100px
window.onload = function () {
    var guanbixiadan = $id("guanbixiadan")
    var sjixiadan = $id("sjixiadan")
    sjixiadan.style.zIndex=2;
    var timer;
    //滑动到一定程度出现顶部搜索框
    window.onscroll=function(){
        console.log(document.documentElement.scrollTop)
        if(document.documentElement.scrollTop>=400){
            $(".sousuonew").fadeIn(500,'linear',function(){
            })
        }
        else{
            $(".sousuonew").fadeOut(500,'linear',function(){
            })
        }
    }

    timer = setTimeout(function () {
        clearTimeout(timer);
        $('#head').animate({
            marginTop: 200,
        }, 1000, 'linear', () => {})
    }, 3000)


    guanbixiadan.onclick = function (){
        sjixiadan.style.display = "none"
    }
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
    $(".yijione").hover(
        function(){
    // console.log($(this).children().eq(1).children().eq(1)[0])
    $(this).children().eq(1)[0].style.display="block"
    $(this).children().eq(1).children().eq(1)[0].style.display="block"

        },
        function(){
        $(".yiji ul").css("display","none");
        })


 // 输入节流
 var flag = false;//记录是否是英文输入法

 $('.sou input').on('compositionstart',function(){
     flag = true;
 });
 $('.sou input').on('compositionend',function(){
     getData($('.sou input').val());
     flag = false
 })

 $('.sou input').on('input',function(){
     if(!flag){
         getData($('.sou input').val())
     }
 })
 $('.sou input').blur(function(){
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
     })
 }
//公告的切换
    $(".xinxigongao").hover(
        function(){
            $(".xinxigongao").removeClass("buxuanzhong")
            $(".fuwugongao").removeClass("xuanzhong")
            $(".xinxigongao").addClass("xuanzhong")
            $(".fuwugongao").addClass("buxuanzhong")
            $(".fuwuright").css("display","none")
            $(".xinxleft").css("display","block")
         },
         function(){
            $(".xinxigongao").toggleClass("xinxqie")
     })

    $(".fuwugongao").hover(
        function(){
            $(".xinxigongao").removeClass("xuanzhong")
            $(".fuwugongao").removeClass("buxuanzhong")
            $(".xinxigongao").addClass("buxuanzhong")
            $(".fuwugongao").addClass("xuanzhong")
            $(".xinxleft").css("display","none")
            $(".fuwuright").css("display","block")
        },
        function(){
           
        })

        //右边固定的菜单
        $(".meau i").hover(
            function(){
                $(this).next().animate({
                    right: 34,
                }, 500, 'linear', () => {})
                // console.log($(this).next())
                $(this).next().css('display',"block")
                // $(".meau b")[0].style.zIndex=999;
            },
            function(){
                $(".meau b").finish()
                $(".meau b").css("display","none")
            }
        )

        //倒计时滑动的选项特效
        $(".lingdian").hover(
           function () {
                // 每次移入的时候,都让之前的动画停止,直接做最新的这个动画
                $('.hua').stop().animate({
                    left: 312,
                })
                $(".hua").css("display","block")
            },
            function(){
                $(".hua").css("display","none")
            })
        $(".shidian").hover(
                function () {
                     // 每次移入的时候,都让之前的动画停止,直接做最新的这个动画
                     $('.hua').stop().animate({
                         left: 452,
                     })
                     $(".hua").css("display","block")
                 }, 
                 function(){
                    $(".hua").css("display","none")
                })
                 $(".shierdian").hover(
                    function () {
                         // 每次移入的时候,都让之前的动画停止,直接做最新的这个动画
                         $('.hua').stop().animate({
                             left: 590,
                         })
                         $(".hua").css("display","block")
                     },
                     function(){
                        $(".hua").css("display","none")
                    })
                     $(".shiliudian").hover(
                        function () {
                             // 每次移入的时候,都让之前的动画停止,直接做最新的这个动画
                             $('.hua').stop().animate({
                                 left: 732,
                             })
                             $(".hua").css("display","block")
                         },
                         function(){
                            $(".hua").css("display","none")
                        })
                         $(".ershidian").hover(
                            function () {
                                 // 每次移入的时候,都让之前的动画停止,直接做最新的这个动画
                                 $('.hua').stop().animate({
                                     left: 866,
                                 })
                                 $(".hua").css("display","block")
                             },
                             function(){
                                $(".hua").css("display","none")
                            })


        $(".bottone").hover(
            function(){
                $(".bottone").addClass("botton")
                $(".botttwo").removeClass("botton")
                $(".changshangtwo").css("display","none")
                $(".changshangone").css("display","block")
            },
            function(){
            }
        )
        $(".botttwo").hover(
            function(){
                $(".botttwo").addClass("botton")
                $(".bottone").removeClass("botton")
                $(".changshangone").css("display","none")
                $(".changshangtwo").css("display","block")
            },
            function(){

            }
        )
        $(".xuanxiang li").hover(
            function(){
                $(".xuanxiang li").removeClass("xuanxiangon")
                $(this).addClass("xuanxiangon")
            }
        )

        //两个畅销榜的切换特效
        $(".btnchangxiao").hover(
            function(){
                $(".btnchangxiao").css("background","#ffffff")
                $(".btnxinshu").css("background","#f5f5f5")
            }
        )
        $(".btnxinshu").hover(
            function(){
                $(".btnxinshu").css("background","#ffffff")
                $(".btnchangxiao").css("background","#f5f5f5")
            }
        )
        $(".tushuchangxiao ul li").hover(
            function(){
                $(".tushuchangxiao ul li").removeClass("huaru")
                $(this).addClass("huaru")
            }
        )
        // $(".tushuzhanshione").css("display","none")
            //不同的选择展示
            $(".xuanxiang li").eq(0).hover(
                function(){
                    $(".tushuzhanshione").css("display","none")
                    $(".tushuzhanshi").css("display","block")
                    $(".tushuzhanshitwo").css("display","none")
                }
            )
            $(".xuanxiang li").eq(1).hover(
                function(){
                    $(".tushuzhanshione").css("display","block")
                    $(".tushuzhanshi").css("display","none")
                    $(".tushuzhanshitwo").css("display","none")
                }
            )
            $(".xuanxiang li").eq(2).hover(
                function(){
                    $(".tushuzhanshi").css("display","none")
                    $(".tushuzhanshione").css("display","none")
                    $(".tushuzhanshitwo").css("display","block")
                }
            )

        
            getTu1()
        //请求然后放在图书板块
    function  getTu1() {
            $.ajax({
                url: "../interface/xinshangjia.json",
                success: function (res) {
                    var data=res
                    // console.log(data[4])
                    // console.log(data[5])
                    if (res) {
                        $('.tushuzhanshi .adcenter').empty()
                        $(".tushuzhanshi .adright").empty()
                        $('.tushuzhanshi .adcenter').append(` 
                        <i class="adcentertop"><img src="../images/index/adcenter.jpg" alt=""></i>
                        <i class="zhanshione">
                        <a href="../pages/detail.html?id=${data[0].index}&price=${data[0].price}" style="background-image: url(${data[0].path});" id="1"></a>
                        <h1>${data[0].text}</h1><span class="tejia">￥${data[0].price}</span>
                        <span class="yuanjia">￥200</span>
                        </i>
                        <i class="zhanshione zhanshioneright">
                        <a href="../pages/detail.html?id=${data[1].index}&price=${data[1].price}" style="background-image: url(${data[1].path});"id="2"></a>
                        <h1>${data[1].text}</h1><span class="tejia">￥${data[1].price}</span>
                        <span class="yuanjia">￥200</span>
                        </i>`)

                        // console.log(data)

                        $(".tushuzhanshi .adright").append(` 
                        <i class="rightone">
                        <a href="../pages/detail.html?id=${data[2].index}&price=${data[2].price}" style="background-image: url(${data[2].path});"id="3"></a>
                        <h1>${data[2].text}</h1><span class="tejia">￥${data[2].price}</span>
                        <span class="yuanjia">￥128</span>
                        </i>
                        <i class="rightone rightoneright">
                        <a href="../pages/detail.html?id=${data[3].index}&price=${data[3].price}" style="background-image: url(${data[3].path});"id="4"></a>
                        <h1>${data[3].text}</h1><span class="tejia">￥${data[3].price}</span>
                        <span class="yuanjia">￥128</span>
                        </i>
                        <i class="rightone">
                        <a href="../pages/detail.html?id=${data[4].index}&price=${data[4].price}" style="background-image: url(${data[4].path});"id="5"></a>
                        <h1>${data[4].text}</h1><span class="tejia">￥${data[4].price}</span>
                        <span class="yuanjia">￥128</span>
                        </i>
                        <i class="rightone rightoneright">
                        <a href="../pages/detail.html?id=${data[5].index}&price=${data[5].price}" style="background-image: url(${data[5].path});"id="6"></a>
                        <h1>${data[5].text}</h1><span class="tejia">￥${data[5].price}</span>
                        <span class="yuanjia">￥128</span>
                        </i>`)
                    
                    
                    }
                },
                error: function () {
                    alert("加入失败")
                },
                // dataType: 'json'
            })
        }
        getTu2()
        function  getTu2() {
            $.ajax({
                url: "../interface/dujia.json",
                data: {
                    id: '1321324214324',
                },
                success: function (res) {
                    var data=res
                    // console.log(data[4])
                    // console.log(data[5])
                    if (res) {
                        $('.tushuzhanshione .adcenter').empty()
                        $(".tushuzhanshione .adright").empty()
                        $('.tushuzhanshione .adcenter').append(` 
                        <i class="adcentertop"><img src="../images/index/adcenterone.jpg" alt=""></i>
                        <i class="zhanshione">
                        <a href="javascript:;" style="background-image: url(${data[0].path});"></a>
                        <h1>${data[0].text}</h1><span class="tejia">￥${data[0].price}</span>
                        <span class="yuanjia">￥200</span>
                        </i>
                        <i class="zhanshione zhanshioneright">
                        <a href="javascript:;" style="background-image: url(${data[1].path});"></a>
                        <h1>${data[1].text}</h1><span class="tejia">￥${data[1].price}</span>
                        <span class="yuanjia">￥200</span>
                        </i>`)

                        $(".tushuzhanshione .adright").append(` 
                        <i class="rightone">
                        <a href="javascriptt:;" style="background-image: url(${data[2].path});"></a>
                        <h1>${data[2].text}</h1><span class="tejia">￥${data[2].price}</span>
                        <span class="yuanjia">￥128</span>
                        </i>
                        <i class="rightone rightoneright">
                        <a href="javascriptt:;" style="background-image: url(${data[3].path});"></a>
                        <h1>${data[3].text}</h1><span class="tejia">￥${data[3].price}</span>
                        <span class="yuanjia">￥128</span>
                        </i>
                        <i class="rightone">
                        <a href="javascriptt:;" style="background-image: url(${data[4].path});"></a>
                        <h1>${data[4].text}</h1><span class="tejia">￥${data[4].price}</span>
                        <span class="yuanjia">￥128</span>
                        </i>
                        <i class="rightone rightoneright">
                        <a href="javascriptt:;" style="background-image: url(${data[5].path});"></a>
                        <h1>${data[5].text}</h1><span class="tejia">￥${data[5].price}</span>
                        <span class="yuanjia">￥128</span>
                        </i>`)
                    }
                },
                error: function () {
                    alert("加入失败")
                },
                // dataType: 'json'
            })
        }

        getTu3()
        function  getTu3() {
            $.ajax({
                url: "../interface/zhongdian.json",
                data: {
                    id: '1321324214324',
                },
                success: function (res) {
                    var data=res
                    // console.log(data[4])
                    // console.log(data[5])
                    if (res) {
                        $('.tushuzhanshitwo .adcenter').empty()
                        $(".tushuzhanshitwo .adright").empty()
                        $('.tushuzhanshitwo .adcenter').append(` 
                        <i class="adcentertop"><img src="../images/index/adcentertwo.jpg" alt=""></i>
                        <i class="zhanshione">
                        <a href="javascript:;" style="background-image: url(${data[0].path});"></a>
                        <h1>${data[0].text}</h1><span class="tejia">￥${data[0].price}</span>
                        <span class="yuanjia">￥200</span>
                        </i>
                        <i class="zhanshione zhanshioneright">
                        <a href="javascript:;" style="background-image: url(${data[1].path});"></a>
                        <h1>${data[1].text}</h1><span class="tejia">￥${data[1].price}</span>
                        <span class="yuanjia">￥200</span>
                        </i>`)

                        $(".tushuzhanshitwo .adright").append(` 
                        <i class="rightone">
                        <a href="javascriptt:;" style="background-image: url(${data[2].path});"></a>
                        <h1>${data[2].text}</h1><span class="tejia">￥${data[2].price}</span>
                        <span class="yuanjia">￥128</span>
                        </i>
                        <i class="rightone rightoneright">
                        <a href="javascriptt:;" style="background-image: url(${data[3].path});"></a>
                        <h1>${data[3].text}</h1><span class="tejia">￥${data[3].price}</span>
                        <span class="yuanjia">￥128</span>
                        </i>
                        <i class="rightone">
                        <a href="javascriptt:;" style="background-image: url(${data[4].path});"></a>
                        <h1>${data[4].text}</h1><span class="tejia">￥${data[4].price}</span>
                        <span class="yuanjia">￥128</span>
                        </i>
                        <i class="rightone rightoneright">
                        <a href="javascriptt:;" style="background-image: url(${data[5].path});"></a>
                        <h1>${data[5].text}</h1><span class="tejia">￥${data[5].price}</span>
                        <span class="yuanjia">￥128</span>
                        </i>`)
                    }
                },
                error: function () {
                    alert("加入失败")
                },
                // dataType: 'json'
            })
        }

        //返回顶部功能
        $(".fankui .saoyisao2").click(function(){
            document.documentElement.scrollTop=0
        })

        $(".fankui .saoyisao").hover(
            function(){
            $(".erweimabottom").css("display","block")
        },
        function(){
            $(".erweimabottom").css("display","none")
        }
        )
}