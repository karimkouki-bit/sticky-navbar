/*global $*/

$(window).scroll(function () {
    'use strict';
    if ($(this).scrollTop() > 100) {
        $(".menu").addClass("sticky");
    }
    
        else {
        
            $(".menu").removeClass("sticky");
   }
});