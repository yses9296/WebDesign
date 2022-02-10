//Menu
$(".nav > ul > li").mouseover(function(){
   $(this).find(".submenu").stop().slideDown(200); //one-by-one 
   //$(".nav > ul > li > ul").stop().slideDown(200); //together
});
$(".nav > ul > li").mouseleave(function(){
   $(this).find(".submenu").stop().slideUp(200); //one-by-one 
   //$(".nav > ul > li > ul").stop().slideUp(200); //together
});

//Tab
var tebBtn = $(".notice > ul > li");
var tabCont = $(".notice > ul > li > ul");

tabCont.hide().eq(0).show();

tebBtn.click(function(e){
    e.preventDefault();
    var target = $(this);
    var index = target.index();

    tebBtn.removeClass("active");
    target.addClass("active");

    tabCont.css("display","none");
    tabCont.eq(index).css("display","block");
})

//PopUp
$(".ad").click(function(){
    $(".layer_bg").css("display","block");
});
$(".close").click(function(){
    $(".layer_bg").css("display","none");
})
