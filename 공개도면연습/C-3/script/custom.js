//menu
$(".nav ul li ").mouseover(function(){
   $(this).find(".submenu").show(); 
});
$(".nav ul li ").mouseout(function(){
   $(this).find(".submenu").hide(); 
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
    position = currentIndex * (-800)+"px";
    
    $(".slideList").animate({left: position}, 300);
    
},3000);


//popup
$(".popup").click(function(){
    $(".layout_bg").css("display","block");
})

$(".close").click(function(){
    $(".layout_bg").css("display","none");
})