$(function() {
  const header = $(".navbar");

  $(window).scroll(function() {
      const scroll = $(window).scrollTop();
      if (scroll >= 50) {
          header.addClass("nav-dark");
      } else {
          header.removeClass("nav-dark");
      }
  });
});