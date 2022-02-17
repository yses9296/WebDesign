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

//Tab Menu
var tabBtn = $(".tab_menu .tab_btn > ul > li");
var tabCont = $(".tab_cont > div");

tabCont.hide().eq(0).show();
tabBtn.click(function(e){
    e.preventDefault();
    
    var target = $(this);
    var index = target.index();
    
    tabBtn.removeClass("active");
    tabBtn.eq(index).addClass("active");
    tabCont.hide().eq(index).show();
});


//PopUp
$(".left_btn, .right_btn").click(function(e){
    e.preventDefault();
    $(".layout_bg").show();
});

$(".close").click(function(e){
    e.preventDefault();
    $(".layout_bg").hide();
});