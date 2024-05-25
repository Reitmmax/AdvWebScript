// JavaScript Document
"use strict"
$(document).ready(function () {
	
	
	
	
	
$('div.hidden').fadeIn(2000).removeClass('hidden'); // makes the top information fade in on load.
	
	
	$('button').hover( // when hovering over button, get bigger, if hovered off get smaller
    function(){$(this).animate({width: '250px', height:'60px'}, 500);},        
    function(){$(this).animate({width: '200px', height:'50px'}, 500);}
);
	
  function isElementInViewport(element) { // sets for when an element is in view
    var rect = element[0].getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
        rect.bottom <= $(window).height() && //viewport by height
      rect.right <= $(window).width() // viewport by width
    );
  }

function handleScroll() {
  $('.slide').each(function() { // header sliding
    var currentElement = $(this);
    var rect = currentElement[0].getBoundingClientRect(); //grabs viewport

    if (rect.top <= $(window).height() && !currentElement.hasClass('sliding')) { // if .slide is in viewport...
      currentElement.addClass('sliding'); // adds class so code doesnt repeat
      currentElement.animate({ //slide up
        top: 0,
        opacity: 1
      }, 500);
    }
  });

  $('.portfolio p').each(function() { // paragraph sliding
    var currentElement = $(this);
    var rect = currentElement[0].getBoundingClientRect();

    if (rect.top <= $(window).height() && !currentElement.hasClass('sliding')) { // if .portfolio p is in viewport...
      currentElement.addClass('sliding'); //adds class to prevent animation from happening again
      currentElement.animate({ //slide from the left on the screen
        left: '0'
      }, 500); 
    }
  });
}

$(window).on('scroll resize', handleScroll); //when scrolling, depending on size of webpage...
handleScroll(); // call function handleScroll() 

  
});
	
	

	


