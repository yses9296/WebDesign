 //메뉴
$(".nav > ul > li").mouseover(function(){
    $(this).find(".submenu").stop().slideDown(300);
})
$(".nav > ul > li").mouseleave(function(){
    $(this).find(".submenu").stop().slideUp(300);
})

//상하 슬라이드
/*
var currentIndex = 0 ;
var slidePosition;

setInterval(function(){
    if (currentIndex < 2){
    currentIndex++;
    }
    else{
        currentIndex = 0;
    }

    slidePosition = currentIndex * (-392)+"px";
    $(".slideList").animate({top: slidePosition}, 300);

}, 3000);
*/

//좌우 슬라이드
var currentIndex = 0 ;
var slidePosition;

setInterval(function(){
    if (currentIndex < 2){
    currentIndex++;
    }
    else{
        currentIndex = 0;
    }

    slidePosition = currentIndex * (-1000)+"px";
    $(".slideList").animate({left: slidePosition}, 300);

}, 3000);