//menu
$(".nav ul li").mouseover(function(){
   $(".nav ul li ul").stop().slideDown(300); 
   $(".nav .menu_bg").stop().slideDown(300); 
});
$(".nav ul li ").mouseleave(function(){
   $(".nav ul li ul").stop().slideUp(300); 
   $(".nav .menu_bg").stop().slideUp(300); 
});

//slide
var currentIndex = 0;
var position;

setInterval(function(){
    if (currentIndex < 2){
        currentIndex++;
    }
    else{
        currentIndex = 0;
    }
    
    position = currentIndex * (-1200)+"px";
    $(".slideList").animate({left: position},300);
},3000);

//tab
$(document).ready(function(){
   var tabBtn = $(".tab_btn ul li");
   var tabCont = $(".tan_cont div");
    
    tabCont.hide().eq(0).show();
    tabBtn.click(function(e){
        e.preventDefault();
        
        var target = $(this);
        var index = target.index();
        
        tabBtn.removeClass("active");
        tabBtn.eq(index).addClass("active");
        tabCont.css("display", "none");
        tabCont.eq(index).css("display", "block");
    });
});


//popup
$(".popup").click(function(){
    $(".layout_bg").css("display","block");
});
$(".close").click(function(){
    $(".layout_bg").css("display","none");
});