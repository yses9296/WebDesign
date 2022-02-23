//menu
$(".nav ul li").mouseover(function(){
    $(".nav ul li ul").stop().slideDown(300);
    $(".menu_bg").stop().slideDown(300);
});
$(".nav ul li").mouseout(function(){
    $(".nav ul li ul").stop().slideUp(300);
    $(".menu_bg").stop().slideUp(300);
});

//slide
$(".slideList").children("div:gt(0)").hide();
var current=0;
setInterval(function(){
    var index = (current+1)%3;
    
    $(".slideList").find("div").eq(current).fadeOut('slow');
    $(".slideList").find("div").eq(index).fadeIn('slow');
    
    current = index;
    
}, 3000);

//popup
$(".popup").click(function(e){
    $(".layer_bg").show();
});
$(".close").click(function(e){
    $(".layer_bg").hide();
});
