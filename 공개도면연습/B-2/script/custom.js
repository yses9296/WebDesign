//menu
$(".nav > ul >li").mouseover(function(){
    $(".nav > ul > li > ul").stop().slideDown(200);
    $(".subback ").stop().slideDown(200);
//            moveDown();
})
$(".nav > ul >li").mouseleave(function(){
    $(".subback ").stop().slideUp(200);
    $(".nav > ul > li > ul").stop().slideUp(200);
})
//
//var y=0;
//
//function moveDown() {
//    y -= 303;
//    var obj = document.getElementById('container');
//    obj.style.top = y + 'px'; 
//}
//
//function moveUp() {
//    y += 303;
//    var obj = document.getElementById('container');
//    obj.style.top = y + 'px';
//
//}

//slideImg
var currentIndex = 0;
var position;

setInterval(function(){
    if(currentIndex < 2){
        currentIndex++;
    }
    else{
        currentIndex =0
    }
    
    position = currentIndex * (-300)+"px";
    $(".slideList").animate({top: position}, 300);
}, 3000);

//popup
$(".popup").click(function(){
    $(".layer_bg").css("display", "block");
});
$(".close").click(function(){
    $(".layer_bg").css("display", "none");
});
