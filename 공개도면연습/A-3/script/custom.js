//menu
$(".nav ul li").mouseover(function(){
   $(this).find(".submenu").stop().slideDown(300);
});
$(".nav ul li").mouseout(function(){
   $(this).find(".submenu").stop().slideUp(300);
});

//slideImg
$(".slideList").children("div:gt(0)").hide();
var current = 0;

setInterval(function(){
    var next = (current+1) % 3;
    $(".slideList").find("div").eq(current).fadeOut('slow');
    $(".slideList").find("div").eq(next).fadeIn('slow');
    current = next;
},3000);

//tabMenu
var tabBtn = $(".tab_btn ul li");
var tabCont = $(".tab_cont ul");

tabCont.hide().eq(0).show();

$(tabBtn).click(function(e){
    var current = $(this);
    var index = current.index();
    
    tabBtn.removeClass("active");
    current.addClass("active");
    
    tabCont.hide().eq(index).show();
    
    
});

//popUp

$(".popup").click(function(e){
    e.preventDefault();
    $(".layer_bg").show();
});
$(".close").click(function(e){
    e.preventDefault();
    $(".layer_bg").hide();
});

