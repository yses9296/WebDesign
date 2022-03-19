jQuery(document).ready(function(){
    //menu
    $(".nav ul li").mouseover(function(){
         $(this).find(".submenu").stop().slideDown(300);
    });
    $(".nav ul li").mouseout(function(){
         $(this).find(".submenu").stop().slideUp(300);
    });

    //slide
    $(".slideList").children("div:gt(0)").hide();
    var current = 0;
    setInterval(function(){
        var next = (current+1) % 3;
        $(".slideList").find("div").eq(current).fadeOut();
        $(".slideList").find("div").eq(next).fadeIn();
        current = next;

    }, 3000);

    //tab
    var tab_btn =$(".tab_btn ul li");
    var tab_cont = $(".tab_cont ul");

    tab_cont.hide().eq(0).show();

    tab_btn.click(function(e){
        e.preventDefault();
        var target = $(this);
        var index = target.index();
        tab_btn.removeClass("active");
        target.addClass("active");
        tab_cont.css("display", "none");
        tab_cont.eq(index).css("display", "block");
    })

    //popup
    $(".popup").click(function(){
        $(".layout_bg").css("display", "block");
    });
    $(".close").click(function(){
        $(".layout_bg").css("display", "none");
    });
});
