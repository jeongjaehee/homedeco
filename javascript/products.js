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

var click = 0;
$("#more").click(function () {
  click++;
  if (click == 1) {
    $.get(
      "https://raw.githubusercontent.com/jeongjaehee/simpleJson1/main/simple1.json"
    ).done((a) => {
      var data = JSON.parse(a);
      templates(data);
      buy();
    });
  }
  if (click == 2) {
    $.get(
      "https://raw.githubusercontent.com/jeongjaehee/simpleJson2/main/simple2.json"
    ).done((a) => {
      var data = JSON.parse(a);
      templates(data);
      buy();
      $("#more").remove();
    });
  }
});
var cart = [];
var baguni = 0;
function buy() {
  $(".buy").click(function (e) {
    var title1 = $(e.target).siblings("h5").text();
    let proIndex = cart.findIndex((a) => {
      return title1 == a.title;
    });
    if (proIndex == -1) {
      cart.push({ title: title1, count: 1 });
    } else {
      cart[proIndex].count++;
    }
    baguni++;
    console.log(baguni, "baguni");
    localStorage.setItem("cart", JSON.stringify(cart));

    console.log(cart);
    $(".baguni > span").text(baguni);
  });
}
buy();
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
