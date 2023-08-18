document.getElementById("submitButton").addEventListener("click", function () {
  var userInput = document.getElementById("userInput").value;
  var contentInput = document.getElementById("contentInput").value;
  var outputDiv = document.getElementsByClassName("container");

  outputDiv.textContent = "닉네임: " + userInput + " 내용: " + contentInput;
  var products = [];

  // 새로운 객체 생성 후 추가
  var newProduct = { name: userInput, content: contentInput };
  products.push(newProduct);

  var outputDiv = document.getElementById("output");

  for (var i = 0; i < products.length; i++) {
    var option = `
    <div class="card">
      <div class="card-body">
        <h5>닉네임: ${products[i].name}</h5>
        <p>댓글: ${products[i].content}</p>
        <button class="btn btn-danger">수정하기</button>
        <button class="btn btn-danger">삭제하기</button>
      </div>
    </div>
  `;

    var optionElement = document.createElement("div");
    optionElement.innerHTML = option;

    outputDiv.appendChild(optionElement);
  }
  function 함수(arr, b) {
    if (arr < b) {
      window.alert("숫자가 작습니다.");
    } else if (arr > b) {
      window.alert("숫자가 큽니다.");
    }
    if (arr == b) {
      window.alert("정답입니다.");
    }
  }
  함수(userInput, 10);
});

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
