(function($) {

  init();

  function init() {
    let el = $('.count-down');

    if (!el.data('eventDate')) {
      return;
    }

    let deadline = new Date(el.data('eventDate'));
    initializeClock('.count-down', deadline);
  }

  function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date());
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function initializeClock(className, endtime) {
    let clock = document.querySelector(className);
    let daysSpan = clock.querySelector('.days');
    let hoursSpan = clock.querySelector('.hours');
    let minutesSpan = clock.querySelector('.minutes');
    let secondsSpan = clock.querySelector('.seconds');
    let timeinterval;

    function updateClock() {
      let t = getTimeRemaining(endtime);

      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

      if (t.total <= 0) {
        clearInterval(timeinterval);
        let countDownEl = document.querySelector('.count-down');
        let afterCountDownEl = document.querySelector('.after-countdown');

        countDownEl.style.display = 'none';
        afterCountDownEl.style.display = 'block';
      }
    }

    updateClock();
    timeinterval = setInterval(updateClock, 1000);
  }

})(jQuery);
