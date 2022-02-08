(function($){
    //Slide
    var currentIndex = 0;
    setInterval(function(){
        if (currentIndex < 2){
            currentIndex++;
        }
        else {
            currentIndex = 0;
        }

        var slidePosition = currentIndex * (-360)+"px";
        $(".slideList").animate({top:slidePosition},400);
    }, 3000);

    //Tab_Menu
    var tabBtn = $(".tab_btn > ul > li");
    var tabCont = $(".tab_cont > div");

    tabCont.hide().eq(0).show();

    tabBtn.click(function(e){
        e.preventDefault();
        var target = $(this);
        var index = target.index();

        tabBtn.removeClass("active");
        target.addClass("active");

        tabCont.css("display","none");
        tabCont.eq(index).css("display","block");

    })

    //Pop_Up
    $(".layerPopup").click(function(){
        $(".layer_bg").css("display","block");
        $(".layer").css("display","block");
    });
    $(".close").click(function(){
        $(".layer_bg").css("display","none");
        $(".layer").css("display","none");
    });
})(jQuery);