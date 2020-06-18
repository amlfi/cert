"use strict";

$(document).ready(function ($) {
  $(".clickable-row").click(function () {
    window.location = $(this).data("href");
  });
});
$(window).scroll(function () {
  $(".arrow").css("opacity", 1 - $(window).scrollTop() / 250); //250 is fade pixels
});