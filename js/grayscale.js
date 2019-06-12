(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 70)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 100
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  //Any Chart for time spent
  anychart.onDocumentReady(function () {
    var chart1 = anychart.pie([
        {x: "Loving puppies and kittens", value: 22},
        {x: "Kayaking", value: 10},
        {x: "Playing Piano", value: 10},
        {x: "Stuck in traffic", value: 18},
        {x: "Studying Reiki", value: 40}
    ]);

    chart1.innerRadius("60%");

    var label = anychart.standalones.label();
    label.text("Personal");
    label.width("100%");
    label.height("100%");
    label.adjustFontSize(true);
    label.fontColor("#60727b");
    label.hAlign("center");
    label.vAlign("middle");

    // set the label as the center content
    chart1.center().content(label);

    //adding monochrome color palette
    chart1.palette(anychart.palettes.turquoise);


    chart1.container("personal-graph");
    chart1.draw();

    
});

anychart.onDocumentReady(function () {
  var chart2 = anychart.pie([
      {x: "Building Apps", value: 35},
      {x: "Networking", value: 15},
      {x: "Reading", value: 26},
      {x: "Learning new coding languages", value: 15},
      {x: "Algorithm practice", value: 9}
  ]);

  chart2.innerRadius("60%");

  var label = anychart.standalones.label();
  label.text("Work");
  label.width("100%");
  label.height("100%");
  label.adjustFontSize(true);
  label.fontColor("#60727b");
  label.hAlign("center");
  label.vAlign("middle");

  // set the label as the center content
  chart2.center().content(label);

  //adding monochrome color palette
  chart2.palette(anychart.palettes.turquoise);


  chart2.container("work-graph");
  chart2.draw();

  
});

})(jQuery); // End of use strict
