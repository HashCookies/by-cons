(function($){})(window.jQuery);

var winH = $(window).height();
var winW = $(window).width();
console.log(winW, winH);

$(document).ready(function() {
   var isMobile = window.matchMedia("only screen and (max-width: 760px)");
   var devW = winW,devH = winH;

   if (isMobile.matches) {
     devW = 'auto';
     devH = 'auto';
   }
   $('.cover').outerHeight(winH).width(winW);

});
