//검색창 onchane
function myFunction() {
  let value = document.getElementById("input").value;
  console.log(value);
}
//슬라이드배너 제외 콘텐츠들 스크롤시 키워주기
// window.addEventListener("scroll", function () {
//   console.log(window.scrollY);
// });
let observer = new IntersectionObserver((e) => {
  e.forEach((box) => {
    if (box.isIntersecting) {
      box.target.style.top = "0px";
    } else {
      box.target.style.top = "-20px";
    }
  });
});
let section = document.querySelectorAll("section");
observer.observe(section[2]);
observer.observe(section[3]);

jQuery(document).ready(function () {
  $(".modal_close").click(function () {
    if ($(e.target).is($(".modal_close"))) {
      $("#modal").addClass("active");
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
  //탭메뉴
  $(".tab-button").click(function (e) {
    if ($(e.target).is($(".tab-button"))) {
      openTab(e.target.dataset.id);
    }
    console.log(e.target);
  });
  function openTab(a) {
    $(".tab-button").removeClass("orange");
    $(".tab-button").eq(a).addClass("orange");
    $(".tab-content").removeClass("show");
    $(".tab-content").eq(a).addClass("show");
  }

  //시공사례 슬라이드
  //왼쪽에서 오른쪽으로 끊임없이 애니메이션
  // setInterval(function () {
  //   $(".ad ul").delay(2000);
  //   $(".ad ul").animate({ marginLeft: -200 });
  //   $(".ad ul").delay(2000);
  //   $(".ad ul").animate({ marginLeft: -800 });

  //   $(".ad ul").delay(2000);
  //   $(".ad ul").animate({ marginLeft: 0 });
  //   $(".ad ul").delay(2000);
  // });
  var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
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
