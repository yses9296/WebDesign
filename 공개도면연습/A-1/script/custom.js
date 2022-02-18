//Menu
$(".nav > ul > li").mouseover(function(){
    $(this).find(".submenu").stop().slideDown(300);
});

$(".nav > ul > li").mouseout(function(){
    $(this).find(".submenu").stop().slideUp(300);
});

//Slide
var currentIndex = 0;
var slidePosition;
setInterval(function(){
    if(currentIndex < 2){
        currentIndex++;
    }
    else {
        currentIndex = 0;
    }
    
    slidePosition = currentIndex * (-300)+"px";
    $(".slideList").animate({top:slidePosition},300);
},3000);

//Tab Menu
var tab_btn = $(".tab_btn > ul > li");
var tab_cont = $(".tab_cont > ul");

tab_cont.hide().eq(0).show();

tab_btn.click(function(e){
    e.preventDefault();
    
    var target = $(this);
    var index = target.index();
    
    tab_btn.removeClass("active");
    target.addClass("active");
    
    tab_cont.css("display", "none")
    tab_cont.eq(index).css("display", "block");
});

//Pop Up
$(".popup").click(function(e){
    e.preventDefault();
    $(".layer_bg").show();
})
$(".close").click(function(e){
    e.preventDefault();
    $(".layer_bg").hide();
})