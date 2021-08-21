new WOW().init();

$(".fotorama").fotorama({
  spinner: {
    lines: 13,
    color: "rgba(0, 0, 0, .75)",
  },
});
$(function () {
  $(".hamb").click(function () {
    $(".mobile").animate({
      right: 0,
    });
    $(this).hide();
    $(".overlay").fadeIn();
  });
  $(".mobile span, .overlay").click(function () {
    $(".mobile").animate({
      right: -250,
    });
    $(".hamb").show();
    $(".overlay").fadeOut();
  });
});

const textActives = document.querySelectorAll(".story-text");
const textButtons = document.querySelectorAll(".story-btn");

// function activator() {
//   for (textActive of textActives) {
//     textActive.classList.add("active");
//   }
// }

// for (textButton of textButtons) {
//   textButton.addEventListener("click", activator);
// }

// console.log(textActives);

const test1 = document.getElementById("btn1");
const test2 = document.getElementById("btn2");
const test3 = document.getElementById("btn3");
const test4 = document.getElementById("btn4");
const test5 = document.getElementById("btn5");
const test6 = document.getElementById("btn6");
const test21 = document.getElementById("text1");
const test22 = document.getElementById("text2");
const test23 = document.getElementById("text3");
const test24 = document.getElementById("text4");
const test25 = document.getElementById("text5");
const test26 = document.getElementById("text6");

test1.addEventListener("click", function (event) {
    test22.classList.remove("active");
    test23.classList.remove("active");
    test24.classList.remove("active");
    test25.classList.remove("active");
    test26.classList.remove("active");
  test21.classList.add("active");
});

test2.addEventListener("click", function (event) {
    test21.classList.remove("active");
    test23.classList.remove("active");
    test24.classList.remove("active");
    test25.classList.remove("active");
    test26.classList.remove("active");
    test22.classList.add("active");
  });

  test3.addEventListener("click", function (event) {
      
    test21.classList.remove("active");
    test22.classList.remove("active");
    test24.classList.remove("active");
    test25.classList.remove("active");
    test26.classList.remove("active");
    test23.classList.add("active");
  });

  test4.addEventListener("click", function (event) {
    test21.classList.remove("active");
    test22.classList.remove("active");
    test23.classList.remove("active");
    test25.classList.remove("active");
    test26.classList.remove("active");
    test24.classList.add("active");
  });

  test5.addEventListener("click", function (event) {
    test21.classList.remove("active");
    test22.classList.remove("active");
    test23.classList.remove("active");
    test24.classList.remove("active");
    test26.classList.remove("active");
    test25.classList.add("active");
  });

  test6.addEventListener("click", function (event) {
    test21.classList.remove("active");
    test22.classList.remove("active");
    test23.classList.remove("active");
    test24.classList.remove("active");
    test25.classList.remove("active");
    test26.classList.add("active");
  });