/*
* Template Name: MyPortfolio
* Template URL: https://bootstrapmade.com/myportfolio-bootstrap-portfolio-website-template/
* License: https://bootstrapmade.com/license/
*/

(function ($) {
  "use strict";

  var burgerMenu = function () {
    $('.burger').click(function (e) {
      $(window).scrollTop(0);
      if (!$('.burger').hasClass('active'))
      $('.burger').addClass('active');
      else
      $('.burger').removeClass('active');
    });
  }
  burgerMenu();

  var siteIstotope = function () {
    var $container = $('#portfolio-grid').isotope({
      itemSelector: '.item',
      isFitWidth: true
    });

    $(window).resize(function () {
      $container.isotope({
        columnWidth: '.col-sm-3'
      });
    });

    $container.isotope({ filter: '*' });

    $('#filters').on('click', 'a', function (e) {
      e.preventDefault();
      var filterValue = $(this).attr('data-filter');
      $container.isotope({ filter: filterValue });
      $('#filters a').removeClass('active');
      $(this).addClass('active');
    });
  }
  var message = "Right-click has been disabled";
  function clickIE() {
    if (document.all) {
      (message);
      return false;
    }
  }
  function clickNS(e) {
    if (document.layers || (document.getElementById && !document.all)) {
      if (e.which == 2 || e.which == 3) {
        (message);
        return false;
      }
    }
  }
  if (document.layers) {
    document.captureEvents(Event.MOUSEDOWN);
    document.onmousedown = clickNS;
  } else {
    document.onmouseup = clickNS;
    document.oncontextmenu = clickIE;
  }
  document.oncontextmenu = new Function("return false");
  document.getElementsByClassName('my-img').ondragstart = function () { return false; };

  $(window).on('load', function () {
    siteIstotope();
  });



  var siteOwlCarousel = function () {
    $('.testimonial-carousel').owlCarousel({
      center: true,
      items: 1,
      loop: true,
      margin: 0,
      autoplay: true,
      smartSpeed: 1000,
    });
  };
  siteOwlCarousel();


})(jQuery);

AOS.init({
  easing: 'ease',
  duration: 1000,
  once: true
});
