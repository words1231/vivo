window.onscroll = function () {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop >= 35) {
        $(".logo").css({
            "position": "fixed",
            "top": "0px",
            "background-color": "rgba(252, 255, 255,.9)",
        });
        $(".aa").css({
            "color": "black"
        });
    } else {
        $("#logo").css({
            "position": "static",
            "background-color": "rgba(252, 255, 255,0)",
            "color": "white"
        });
        $(".aa").css({
            "color": "white"
        });
    }
    console.log(scrollTop)
    if (scrollTop >= 1200){
        $(".hddb").css({
            "display":"block",
        })
    }else{
        $(".hddb").css({
            "display":"none",
        })
    }

}


$(".block").mouseenter(function () {
    $(".tao").css({
        "display": "block"
    })
    $(".logo").css({
        "background": "white"
    })
    $(".aa").css({
        "color": "black"
    })
})
$(".block").mouseleave(function () {
    $(".tao").css({
        "display": "none"
    })
    $(".logo").css({
        "background": "none"
    })
    $(".aa").css({
        "color": "white"
    })
})
$(".banner").click(function () {
    window.location.href("#")
})