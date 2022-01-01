$(window).on("load", function() {
  $("#preloader").fadeOut();

  $(function() {
    //header scroll class
    $(window).on("scroll", function(e) {
      if ($(window).scrollTop() > 5) {
        $("header").addClass("header-scrolled");
      } else {
        $("header").removeClass("header-scrolled");
      }
    });

    // Responsive navigation design

    $(".nav-toggler").on("click", function() {
      $("header").toggleClass("nav-opened");
    });

    // Banner section Slick js initialize
    let customDots = $(".bnr-slide-indic-wrp").children();
    let slideDuration = 3000;

    //pauseOnFocus
    //pauseOnHover

    $(".intro-cnt-wrap").on("init afterChange", function(e, s) {
      $(".bnr-slide-indic").removeClass("bnr-slide-indic-actv");
      $(customDots[s.currentSlide]).addClass("bnr-slide-indic-actv");

      let activeIndic = document.querySelector(
        ".bnr-slide-indic-actv .ldr-thumb"
      );

      activeIndic.style.width = "100%";
      activeIndic.style.transition = `transform ${slideDuration / 1000}s`;
      activeIndic.style.transitionTimingFunction = "linear";
    });

    const slick = $(".intro-cnt-wrap").slick({
      arrows: false,
      infinite: true,
      speed: 800,
      autoplay: true,
      autoplaySpeed: slideDuration,
      pauseOnFocus: false,
      pauseOnHover: false

      // dots: true,
      // appendDots: $(".bnr-slide-indic")
    });

    //Initialize counterjs
    $(".counter").counterUp({
      delay: 10,
      time: 1500
    });

    // Quotes and testimoni section Slick js initialize
    $("#quotes-1 .qts-wrap").slick({
      prevArrow: $(".slick-cs-prev"),
      nextArrow: $(".slick-cs-next")
    });

    $("#quotes-2 .testimoni-wrap").slick({
      prevArrow: $(".slick-cs2-prev"),
      nextArrow: $(".slick-cs2-next")
    });

    // Jquery UI accordion initialize
    $("#accordion1").accordion({
      icons: null
    });

    $(window).on("resize", function() {
      $("#accordion1").accordion("refresh");
    });
  });
});
