/*global $, window */
$(function () {
    "use strict";
    //trigger the nice scroll plugin
    
    $("html").niceScroll({
        cursorcolor : "#F7600F",
        cursorborder : "none",
        cursorborderradius : "2px",
        cursorwidth : "8px"
    });
    
    //adjust the header height
    $("header , .overlay").height($(window).height());
    
    // adjust intro to the middle of the header
    
    $(".intro").css("paddingTop", ($(window).height() - $(".intro").height() - 300) / 2);
    
    
    //adjust the sub input to the center
    $(".s-overlay").css("paddingTop", ($(window).height() - $(".tr").height() - 350) / 2);
    
    
    // scroll to featrues
    $("header .buttons .hire").click(function () {
        
        $("html, body").animate({
            
            scrollTop: $(".contact").offset().top
            
        }, 1500);
    });
    //our work
    
    $("header .buttons .port").click(function () {
        
        $("html, body").animate({
            
            scrollTop: $(".our-work").offset().top
            
        }, 1000);
    });
    
    //cheveron
    $("header .chev i").click(function () {
        
        $("html, body").animate({
            
            scrollTop: $(".services").offset().top
            
        }, 1000);
    });
    //show more button
    
    $(".show").click(function () {
        $(".item").fadeIn(1500);
    });
    
    //make the testimonial slider
    var leftArrow = $(".testi .ion-chevron-left"),
        rightArrow = $(".testi .ion-chevron-right");
    
    function checkClients() {
        
        if ($(".client:first").hasClass("active")) {
            
            leftArrow.fadeOut(100);
            
        } else {
            
            leftArrow.fadeIn(100);
            
        }
        
        if ($(".client:last").hasClass("active")) {
            
            rightArrow.fadeOut(100);
            
        } else {
            
            rightArrow.fadeIn(100);
            
        }
    }
    checkClients();//call the function to work
    
     /*
        short hand code for if condition
        
        $(".client:first").hasClass("active") ? leftArrow.fadeOut() : leftArrow.fadeIn();
        
        $(".client:last").hasClass("active") ? rightArrow.fadeOut() : rightArrow.fadeIn();
    */
    
    $(".testi i").click(function () {
        
        if ($(this).hasClass("ion-chevron-right")) {
            
            $(".testi .active").fadeOut(500, function () {
                $(this).removeClass("active").next(".client").addClass("active").fadeIn(500);
                
                checkClients();//call the function to check
            });
        } else {
            
            $(".testi .active").fadeOut(500, function () {
                $(this).removeClass("active").prev(".client").addClass("active").fadeIn(500);
                
                checkClients();//call the function to chack
            });
        }
    });
   /*
    شرح المعادله 
    لما ادوس على الايكون هتعمل شرط معين لو الايكون دا يمين هتعمل للديف اللي عنده كلاس اكتيف اخفاء و تعمل فانكشن كول باك تحذف فيها الكلاس اكتيف من العنصر نفسه و تشيك على اللي بعده
   */
    
    /*hire us button*/
    
     
});