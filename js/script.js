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


var $html = $("html");
 
var page = 1;
 
// var lastPage = $("footer").length;
 
$html.animate({scrollTop:0},10);


$(window).on("wheel", function(e){
 
	if($html.is(":animated")) return;
 
	if(e.originalEvent.deltaY > 0){
		if(page== 2) return;
 
		page++;
	}else if(e.originalEvent.deltaY < 0){
		if(page == 1) return;
 
		page--;
	}
	var posTop = (page-1) * $(window).height();
 
	$html.animate({scrollTop : posTop});
 
});
