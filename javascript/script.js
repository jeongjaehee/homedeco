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
  //로그인창 알람 띄우기
  $("form").on("submit", function (e) {
    if (document.getElementById("exampleInputEmail1").value == "") {
      e.preventDefault();
      alert("이메일주소를 입력하세요");
    } else if (document.getElementById("exampleInputPassword1").value == "") {
      e.preventDefault();
      alert("비밀번호를 입력하세요");
    } else if (
      document.getElementById("exampleInputPassword1").value.length < 2
    ) {
      e.preventDefault();
      alert("비밀번호는 2자리 이상이어야 합니다.");
    }
  });
});
