(function($) {
  'use strict';

  $('.scroll-arrow .page-scroll').hover(
    function() {
      $(this).children().addClass('animated bounce');
    },
    function() {
      $(this).children().removeClass('animated bounce');
    }
  );

})(jQuery);
