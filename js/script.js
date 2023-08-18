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


const donut = document.querySelector(".donut")
donut.dataset.percent = totalMinwon
donut.style.background = `conic-gradient(#3F8BC9 0% ${totalMinwon}%, #F2F2F2 ${totalMinwon}% 100%)`

// let t4 = 0
// const donutAnimation = setInterval(() => {
//   donut.dataset.percent = t4
//   donut.style.background = `conic-gradient(#4F98FF 0 ${t4}%, #DEDEDE ${t4}% 100% )`

//   t4++ >= totalMinwon && clearInterval(donutAnimation)
// }, 10)

let t5 = 0
const donutAnimation2 = setInterval(() => {
  donut2.dataset.percent = t5
  donut2.style.background = totalMinwon > t5 ? `conic-gradient(#4F98FF 0 ${t3}%, #dedede ${t3}% 100% )` : 
  totalMinwon + resolveMinwon > t5 ? `conic-gradient(#4F98FF 0 ${totalMinwon}%, #f44336 ${totalMinwon}% ${t3}%, #dedede ${t3}% 100%)` : 
  `conic-gradient(#4F98FF 0 ${totalMinwon}%, #f44336 ${totalMinwon}% ${totalMinwon + resolveMinwon}%, #dedede ${totalMinwon + resolveMinwon}% 100%)`
  t5++ >= totalMinwon + resolveMinwon && clearInterval(donutAnimation2)
}, 10)