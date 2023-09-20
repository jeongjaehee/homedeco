var products = [
  { id: 0, price: 70000, title: "Blossom Dress" },
  { id: 1, price: 50000, title: "Springfield Shirt" },
  { id: 2, price: 60000, title: "Black Monastery" },
];
function templates(name) {
  name.forEach((a, i) => {
    var 템플릿 = `<div class="col-sm-4">
        <img src="https://via.placeholder.com/600" class="w-100">
        <h5>${name[i].title}</h5>
        <p>가격 : ${name[i].price}</p>
        <button class="btn buy"></button>
      </div>
      `;
    $(".row").append(템플릿);
  });
}
templates(products);
function more(name) {
  name.forEach((a, i) => {
    var more = `<div class="view-list">
        <img src="https://via.placeholder.com/600" class="w-100">
        <h5>${name[i].title}</h5>
        <p>가격 : ${name[i].price}</p>
       
      </div>
      `;
    $(".view").append(more);
  });
}
more(products);
let click = 0;
let cart = localStorage.getItem("cart");
cart = JSON.parse(cart);
function buy() {
  $(".buy").click(function (e) {
    var title1 = $(e.target).siblings("h5").text();

    let proIndex = cart.findIndex((a) => {
      return title1 == a.title;
    });
    console.log(proIndex);
    if (localStorage.getItem("cart") != null) {
      console.log(proIndex);
      console.log("d있음");
      if (proIndex == -1) {
        console.log("없음");

        cart.push({ title: title1, count: 1 });
      } else {
        console.log("있음");
        console.log(cart[proIndex].count);
        cart[proIndex].count++;
      }
    }
    numBanuni();
    localStorage.setItem("cart", JSON.stringify(cart));
  });
}
buy();
function numBanuni() {
  var baguni = 0;
  for (i = 0; i < cart.length; i++) {
    baguni += cart[i].count;
  }
  $(".baguni > span").text(baguni);
}
numBanuni();
$("#more").click(function () {
  click++;

  if (click == 1) {
    $.get(
      "https://raw.githubusercontent.com/jeongjaehee/simpleJson1/main/simple1.json"
    ).done((a) => {
      var data = JSON.parse(a);
      more(data);
    });
  }
  if (click == 2) {
    $.get(
      "https://raw.githubusercontent.com/jeongjaehee/simpleJson2/main/simple2.json"
    ).done((a) => {
      var data = JSON.parse(a);
      more(data);
      $("#more").remove();
    });
  }
});
var baguni = 0;

// 이벤트 리스너를 추가

$(".baguni").hover(
  function () {
    $(".cartcontent").text(localStorage.getItem("cart"));
    $(".cartcontent").show();
  },
  function () {
    $(".cartcontent").hide();
  }
);
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
//검색창 change
document.getElementById("input").addEventListener("change", function () {
  console.log("안녕");
});
