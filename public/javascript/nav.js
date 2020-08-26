$(document).ready(function() {
    $(window).scroll(function () {
        const scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $('.navbar').addClass("nav-dark navbar-dark");
            $('.navbar').removeClass("navbar-light");
  
        } else {
            $('.navbar').removeClass("nav-dark navbar-dark");
            $('.navbar').addClass("navbar-light");
        }
    });
});