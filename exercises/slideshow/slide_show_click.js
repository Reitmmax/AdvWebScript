"use strict";
$(document).ready( () => {
    // grabs the slide ID and grab the first one
    let nextSlide = $("#slides img:first-child");
    // start of the Slideshow function
    const runSlideShow = () => { 
        //fades out the captiom
        $("#caption").fadeOut(1000);
        // moves on to the next child image
        $("#slide").fadeOut(1000,
            () => { //go back to the beginning
                if (nextSlide.next().length == 0) {
                    nextSlide = $("#slides img:first-child");
                }
            //look at the next child image.    
            else {
                    nextSlide = nextSlide.next();
                }
            //grab src from img tag
const nextSlideSource = nextSlide.attr("src");
            //makes the caption the alt text of the image
const nextCaption = nextSlide.attr("alt");
            //make the src and caption to whatever image it is on. 
$("#slide").attr("src", nextSlideSource).fadeIn(1000);                    
$("#caption").text(nextCaption).fadeIn(1000);
            });    // end fadeOut()
    };
    //makes a timer for the slideshow which is 3secs
      let timer1 = setInterval(runSlideShow, 3000);
    //click event
    $("#slide").click( () => {
        //when the slide is clicked on, clear the interval and set the the timer to null (stops the slideshow on the image clicked)
        if (timer1 != null) { // if code is running...
            clearInterval(timer1); // clear timer
            timer1 = null; // set timer to null
        } 
        //set the timer back when the image is clicked again. (turns the slideshow back on)
        else {
            runSlideShow(); //start slideshow
            timer1 = setInterval(runSlideShow, 3000); // for 3 secs
        }
    });
});