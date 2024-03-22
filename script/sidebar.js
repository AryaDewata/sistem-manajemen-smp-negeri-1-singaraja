$(".side-menu li").on("click", ".list", function (e) {
  if ($(this).parent().children("ul").length) {
    e.preventDefault();
    $(this).addClass("active");
    $(this).parent().children("ul").slideDown();
    setTimeout(function () {
      $.fn.matchHeight._update();
      $.fn.matchHeight._maintainScroll = true;
    }, 1000);
  }
});

$(".side-menu li").on("click", ".list.active", function (e) {
  e.preventDefault();
  $(this).removeClass("active");
  $(this).parent().children("ul").slideUp();
  setTimeout(function () {
    $.fn.matchHeight._update();
    $.fn.matchHeight._maintainScroll = true;
  }, 1000);
});