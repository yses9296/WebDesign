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
var next;

setInterval(function(){
    next = (current + 1) % 3;
    
    $(".slideList").find("div").eq(current).fadeOut();
    $(".slideList").find("div").eq(next).fadeIn();
    
    current = next;
}, 3000);

//popup
$(".popup").click(function(){
    $(".layout_bg").css("display", "block");
});
$(".close").click(function(){
    $(".layout_bg").css("display", "none");
});
