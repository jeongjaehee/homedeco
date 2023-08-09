//검색창 onchane
function myFunction() {
  let value = document.getElementById("input").value;
  console.log(value);
}
//왼쪽에서 오른쪽으로 끊임없이 슬라이드
$(function () {
  $(".slidelist").hide();
  $(".slidelist").first().show();
  setInterval(function () {
    $(".slidelist:first-child")
      .fadeOut()
      .next("li")
      .fadeIn()
      .end()
      .appendTo(".slidelist");
  }, 3000);
});
jQuery(document).ready(function () {
  $(".modal_close").click(function () {
    $("#modal").addClass("active");
  });
  //메뉴바 클릭하면 슬라이드다운
  $(".menu_bar").click(function () {
    $(".navi_wrap").stop().slideDown(500);
  });
  $(".menu_closebar").click(function () {
    $(".navi_wrap").stop().slideUp(500);
  });
  //시공사례 슬라이드
  //왼쪽에서 오른쪽으로 끊임없이 애니메이션
  setInterval(function () {
    $(".ad ul").delay(2000);
    $(".ad ul").animate({ marginLeft: -200 });
    $(".ad ul").delay(2000);
    $(".ad ul").animate({ marginLeft: -800 });
    $(".ad ul").delay(2000);
    $(".ad ul").animate({ marginLeft: 0 });
    $(".ad ul").delay(2000);
  });

  //공지사항 모달창
  $(".left a:gt(0)").hide();
  setInterval(function () {
    $(".left a:first-child")
      .fadeOut()
      .next("a")
      .fadeIn()
      .end()
      .appendTo(".left");
  }, 3000);

  $(function () {
    $(".tabmenu>li>a").click(function () {
      $(this).parent().addClass("active").siblings().removeClass("active");
      return false;
    });
  });
});
