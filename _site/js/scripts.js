(function($){})(window.jQuery);

var winH = $(window).height();
var winW = $(window).width();

$(document).ready(function() {
   var isMobile = window.matchMedia("only screen and (max-width: 760px)");
   var devW = winW,devH = winH;

   if (isMobile.matches) {
     devW = 'auto';
     devH = 'auto';
   }
   $('#main-cover').height(winH).width(winW);
   $('.flexslider, .slide').height(devH).width(devW);

  $('.flexslider').each(function() {
    $(this).flexslider({
      animation: "fade",
      animationLoop: false,
      itemWidth: winW,
      maxItems: 1
    });
  });

  $('#sign-petition').on('click', function() {
    $(document).scrollTo($('.petition-form'), 600, {easing: 'linear'});
    return false;
  });
  $('#main-link').on('click', function() {
    $(document).scrollTo($('#intro-section'), 600, {easing: 'linear'});
    return false;
  });
});
