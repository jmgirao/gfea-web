/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
  "use strict"; // Start of use strict

  var resolutions = {
    sm: 786,
    md: 962,
    lg: 1200
  }

  var mediaQueries = {
    mobile: window.matchMedia('(max-width: ' + resolutions.sm + 'px)'),
    tablet: window.matchMedia('(max-width: ' + resolutions.md + 'px'),
    desktop: window.matchMedia('(max-width: ' + resolutions.lg + 'px'),
  }

  mediaQueries.mobile.addListener(handleChangeFitText);
  mediaQueries.tablet.addListener(handleChangeFitText);
  mediaQueries.desktop.addListener(handleChangeFitText);

  if ('ontouchstart' in window) {
    $('html').addClass('touch-events');
  }

  handleChangeFitText();

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
      $(this).children().addClass('animated bounce');
    },
    function() {
      $(this).children().removeClass('animated bounce');
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

  $('.ga-click').click(function(e) {
    window.dataLayer.push({
      elementTitle: e.currentTarget.dataset.name,
      elementCategory: e.currentTarget.dataset.category
    });
  });

  $('.ga-external-link').click(function(e) {
    window.dataLayer.push({
      elementTitle: e.currentTarget.dataset.name
    });
  });

  window.onscroll = function() {
    setTimeout(function() {
      if ($('#mainNav').hasClass('open-navbar')) {
        $('.navbar-toggle:visible').click();
      }
    });
  };

  function handleChangeFitText() {
    var options;

    if(mediaQueries.mobile.matches) {
      options = {
        minFontSize: '20px',
        maxFontSize: '30px'
      }
    } else if(mediaQueries.tablet.matches) {
      options = {
        minFontSize: '30px',
        maxFontSize: '50px'
      }
    } else {
      options = {
        minFontSize: '35px',
        maxFontSize: '55px'
      };
    }

    if(options) {
      $("h1").fitText(1.2, options);
    }

  }

})(jQuery); // End of use strict
