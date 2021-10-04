// new WOW().init();

wow = new WOW({
  boxClass: 'wow',
  animateClass: 'animated',
  offset: 0,
  mobile: false,
  live: true
})
wow.init();

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



const test1 = document.getElementById("btn1");
const test2 = document.getElementById("btn2");
const test3 = document.getElementById("btn3");

const test21 = document.getElementById("text1");
const test22 = document.getElementById("text2");
const test23 = document.getElementById("text3");


test1.addEventListener("click", function (event) {
    test22.classList.remove("active");
    test23.classList.remove("active");
    
  test21.classList.add("active");
});

test2.addEventListener("click", function (event) {
    test21.classList.remove("active");
    test23.classList.remove("active");
    
    test22.classList.add("active");
  });

  test3.addEventListener("click", function (event) {
      
    test21.classList.remove("active");
    test22.classList.remove("active");
    
    test23.classList.add("active");
  });

  