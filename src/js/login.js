window.onload = function () {
    var tixing = document.getElementById("tixing");
    var zhezhao = document.getElementById("zhezhao");
    var zdl = document.getElementById("zdl");
    //切换密码或者是扫码登录
    var qiehuan = document.getElementById("qiehuan")
    //二维码登录的盒子
    var erwmdenglu = document.getElementById("erwmdenglu")
    //密码登录的盒子
    var mimdenglu = document.getElementById("mimdenglu")
    zdl.onclick = function () {
        zhezhao.style.display = "none"
        tixing.style.display = "none"
    }
    qiehuan.onclick = function () {
        erwmdenglu.style.display = "none";
        mimdenglu.style.display = "block";
    }
    qiehuan1.onclick = function () {
        mimdenglu.style.display = "none";
        erwmdenglu.style.display = "block";
    }
}