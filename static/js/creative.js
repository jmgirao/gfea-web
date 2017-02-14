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

  initialize();

  initializeSwipers();

  attachEvents();


  // PRIVATE FUNCTIONS

  function initialize() {
    mediaQueries.mobile.addListener(handleChangeFitText);
    mediaQueries.tablet.addListener(handleChangeFitText);
    mediaQueries.desktop.addListener(handleChangeFitText);

    if ('ontouchstart' in window) {
      $('html').addClass('touch-events');
    }

    handleChangeFitText();

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

    // Offset for Main Navigation
    $('#mainNav').affix({
      offset: {
        top: 100
      }
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
      target: '.navbar-fixed-top',
      offset: 51
    });
  }

  function attachEvents() {
    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').click(handleClickPageScroll);
    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(handleClickMenuItem);
    $('.scroll-arrow .page-scroll').hover(handleHoverIn, handleHoverOut);
    $('.navbar-toggle:visible').click(handleClickOpenMenu);
    $(window).scroll(handleChangeActiveMenuItem);

    // GOOGLE ANALYTICS
    $('.ga-click').click(updateDataLayer);
    $('.ga-external-link').click(updateDataLayer);
  }

  function initializeSwipers() {

    var headerSlides = $('.swiper-container .swiper-slide');

    if(headerSlides.length > 1) {
      //initialize swiper when document ready
      var mySwiper = new Swiper ('.swiper-container', {
        direction: 'vertical',
        loop: true,
        autoplay: 8000,
        speed: 2000,
        effect: 'fade'
      });
    }

  }



  // EVENTS HANDLERS

  function handleClickPageScroll(event) {
    event.preventDefault();

    var anchor = $(this);
    var targetEl = $(anchor.attr('href') || '#');

    if(targetEl.length) {
      $('html, body').stop().animate({
        scrollTop: targetEl.offset().top - 50
      }, 1250, 'easeInOutExpo');
    }
  }

  function handleClickMenuItem() {
    $('.navbar-toggle:visible').click();
  }

  function handleHoverIn() {
    $(this).children().addClass('animated bounce');
  }

  function handleHoverOut() {
    $(this).children().removeClass('animated bounce');
  }

  function handleClickOpenMenu() {
    var el = $('#mainNav');

    if (el.hasClass('open-navbar')) {
      el.removeClass('open-navbar');
    } else {
      el.addClass('open-navbar');
    }
  }

  function handleChangeActiveMenuItem() {
    setTimeout(function() {
      if ($('#mainNav').hasClass('open-navbar')) {
        $('.navbar-toggle:visible').click();
      }
    });
  }

  function updateDataLayer(e) {
    window.dataLayer.push({
      elementTitle: e.currentTarget.dataset.name,
      elementCategory: e.currentTarget.dataset.category
    });
  }

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
