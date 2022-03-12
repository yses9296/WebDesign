$(document).ready(function(){
    //menu
    $(".submenu").hide();
    $("nav").mouseover(function(){
       $(".submenu").stop().slideDown(300); 
    });
    $("nav").mouseout(function(){
       $(".submenu").stop().slideUp(300); 
    });
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
    
    position = currentIndex * (-1200)+"px";
    
    $(".slideList").animate({left:position}, 300);
}, 3000);

//popup
$(".popup").click(function(){
    $(".layout_bg").css("display", "block");
});
$(".close").click(function(){
    $(".layout_bg").css("display", "none");
});
