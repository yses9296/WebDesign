//Menu
$(".nav ul li").mouseover(function(){
    $(".nav ul li ul.submenu").stop().slideDown(300);
    $(".nav_bg").stop().slideDown(300);
})

$(".nav ul li").mouseout(function(){
    $(".nav ul li ul.submenu").stop().slideUp(300);
    $(".nav_bg").stop().slideUp(300);
});

//Banner Slide
var currentIndex = 0;
var position;

setInterval(function(){
    if(currentIndex < 2){
        currentIndex++;
    }
    else {
        currentIndex = 0;
    }
    
    position = currentIndex * (-1200)+"px";
    
    $(".slideList").animate({left:position}, 300);
}, 3000);

//Tab Menu

//Pop Up
$(".popup").click(function(e){
    e.preventDefault();
    $(".layer_bg").show();
})
$(".close").click(function(e){
    e.preventDefault();
    $(".layer_bg").hide();
})