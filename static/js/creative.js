/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
  "use strict"; // Start of use strict

  if ('ontouchstart' in window) {
    $('html').addClass('touch-events');
  }

  // jQuery for page scrolling feature - requires jQuery Easing plugin
  $('a.page-scroll').bind('click', function(event) {
    event.preventDefault();

    var anchor = $(this);
    var targetEl = $(anchor.attr('href') || '#');

    if(targetEl.length) {
      $('html, body').stop().animate({
        scrollTop: targetEl.offset().top - 50
      }, 1250, 'easeInOutExpo');
    }
  });

  // Highlight the top nav as scrolling occurs
  $('body').scrollspy({
    target: '.navbar-fixed-top',
    offset: 51
  })

  // Closes the Responsive Menu on Menu Item Click
  $('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
  });

  // Fit Text Plugin for Main Header
  $("h1").fitText(
    1.2, {
      minFontSize: '35px',
      maxFontSize: '55px'
    }
  );

  // Offset for Main Navigation
  $('#mainNav').affix({
    offset: {
      top: 100
    }
  })

  // Initialize WOW.js Scrolling Animations
  new WOW().init();


  $('.scroll-arrow .page-scroll').hover(
    function() {
      setTimeout($(this).children().addClass('animated bounce'));
    },
    function() {
      setTimeout($(this).children().removeClass('animated bounce'));
    }
  );

  $('.navbar-toggle:visible').click(function() {
    var el = $('#mainNav');

    if (el.hasClass('open-navbar')) {
      el.removeClass('open-navbar');
    } else {
      el.addClass('open-navbar');
    }
  });

  window.onscroll = function() {
    setTimeout(function() {
      if ($('#mainNav').hasClass('open-navbar')) {
        $('.navbar-toggle:visible').click();
      }
    });
  };

})(jQuery); // End of use strict
