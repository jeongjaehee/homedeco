// JavaScript Document

jQuery(document).ready(function () {
  $(".menu_bar").click(function () {
    $(".navi_wrap").stop().slideDown(500);
  });
  $(".menu_closebar").click(function () {
    $(".navi_wrap").stop().slideUp(500);
  });
  // $(".menu_bar").click(function () {
  //   $(".navi").slideToggle();
  // });
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

  // $("#modal").addClass("active");

  $(".btn").click(function () {
    $("#modal").removeClass("active");
  });
  //화면 뜨자마자 모달창 띄우기
  // $("#modal").addClass("active");
});
