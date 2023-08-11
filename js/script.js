$(document).ready(function () {
           // 사이드 메뉴바 
    $("#logo").click(function () {
        $("#side-box").animate({right: "0"}, 500);
        // $("#side-box").fadeIn(600);
        $("#logo").fadeOut(600);
    });

    $(".close-btn").click(function () {
        $("#side-box").animate({right: "-100%"}, 500);
        // $("#side-box").fadeOut(600);
        $("#logo").fadeIn(600);
    });

});;
