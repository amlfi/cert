
// Clickable Row
$(document).ready(function ($) {
  $(".clickable-row").click(function () {
    window.location = $(this).data("href");
  });
});

// Window Scroll
$(window).scroll(function(){
  $(".arrow").css("opacity", 1 - $(window).scrollTop() / 250); 
//250 is fade pixels
});

// BS Init
$(document).ready(function(){
	AOS.init({ disable: 'mobile' });
});