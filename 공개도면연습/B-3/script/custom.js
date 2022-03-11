//menu
$(".nav ul li").mouseover(function(){
    $(this).find(".submenu").stop().slideDown(300);
});
$(".nav ul li").mouseout(function(){
    $(this).find(".submenu").stop().slideUp(20);
});

//slide
var currentIndex = 0;
var position;
setInterval(function(){
    if(currentIndex < 2){
        currentIndex++;
    }
    else {
        currentIndex = 0;
    }
    
    position = currentIndex * (-300)+"px";
    
    $(".slideList").animate({top: position}, 300);
}, 3000);

//popup
$(".popup").click(function(){
    $(".layout_bg").css("display", "block");
});
$(".close").click(function(){
    $(".layout_bg").css("display", "none");
});