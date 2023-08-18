$(document).ready(function () {
  // 사이드 메뉴바 
  $("#logo").click(function () {
    $("#side-box").animate({ right: "0" }, 600);
    // $("#side-box").fadeIn(600);
    $("#logo").fadeOut(600);
  });

  $(".close-btn").click(function () {
    $("#side-box").animate({ right: "-100%" }, 1200);
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

const donut = document.querySelector(".donut")
donut.dataset.percent = totalMinwon
donut.style.background = `conic-gradient(#3F8BC9 0% ${totalMinwon}%, #F2F2F2 ${totalMinwon}% 100%)`

let t5 = 0
const donutAnimation2 = setInterval(() => {
  donut2.dataset.percent = t5
  donut2.style.background = totalMinwon > t5 ? `conic-gradient(#4F98FF 0 ${t3}%, #dedede ${t3}% 100% )` : 
  totalMinwon + resolveMinwon > t5 ? `conic-gradient(#4F98FF 0 ${totalMinwon}%, #f44336 ${totalMinwon}% ${t3}%, #dedede ${t3}% 100%)` : 
  `conic-gradient(#4F98FF 0 ${totalMinwon}%, #f44336 ${totalMinwon}% ${totalMinwon + resolveMinwon}%, #dedede ${totalMinwon + resolveMinwon}% 100%)`
  t5++ >= totalMinwon + resolveMinwon && clearInterval(donutAnimation2)
}, 10)