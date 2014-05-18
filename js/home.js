// parallax scrolling
$(window).load(function() {
  var parallax = function() {
    var scrolled = $(window).scrollTop();
    $(".intro").css("background-position-y", -(scrolled * 0.15) + "px");
  };

  $(window).scroll(function(e) {
    parallax();
  });
});