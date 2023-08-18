//검색창 change
document.getElementById("input").addEventListener("change", function () {
  console.log("안녕");
});
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
});
