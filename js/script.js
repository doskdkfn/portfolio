$(document).ready(function () {
  // 사이드 메뉴바 
  $("#logo").click(function () {
    $("#side-box").animate({ right: "0" }, 500);
    // $("#side-box").fadeIn(600);
    $("#logo").fadeOut(600);
  });

  $(".close-btn").click(function () {
    $("#side-box").animate({ right: "-100%" }, 500);
    // $("#side-box").fadeOut(600);
    $("#logo").fadeIn(600);
  });

});

/////////  마우스 스크롤 시 한 섹션씩 넘어감

var mHtml = $("html");
var page = 1;

mHtml .animate({scrollTop : 0}, 10);

$(window).on("wheel", function(e) {
  if(mHtml.is(":animated")) return;
  if(e.originalEvent.deltaY > 0) {
      if(page == 4) return;
      page++;
  } else if(e.originalEvent.deltaY < 0) {
      if(page == 1) return;
      page--;
  }
  var posTop =(page-1) * $(window).height();
  mHtml.animate({scrollTop : posTop});
})

/////////  도넛 그래프 애니메이션

