// JavaScript Document
"use strict";
$(document).ready(function() {
  $("#buttons button").click(function() {
    // Get the clicked button's class name
    var buttonClass = $(this).attr("class");

    // shows whatever button was clicked on
    $("." + buttonClass).show();

    // add the "hide" class back to all other divs with the same class
    $(".content:not(." + buttonClass + ")").hide();
  });
});