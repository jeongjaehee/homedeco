//로그인 사이트
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
//메뉴바 클릭하면 슬라이드다운
$(".menu_bar").click(function (e) {
  if ($(e.target).is($(".menu_bar"))) {
    $(".navi_wrap").stop().slideDown(500);
  }
});
$(".menu_closebar").click(function (e) {
  if ($(e.target).is($(".menu_closebar"))) {
    $(".navi_wrap").stop().slideUp(500);
  }
});
