$(window).on('load', function () {
  $(".preloader").hide();
});
$(document).ready(function() {
    new WOW().init();

    //////// search /////////////
    $(".search-btn").click(function(e) {
        e.preventDefault();
        $('.search-content').toggleClass('height-when-open');
        $('.search-btn').toggleClass('close-search');
    });

    //phone size menu onclick
    if ($(window).width() <= 991) {

        $(".menu-id").click(function(e) {
            e.preventDefault();

            $(".navgition").toggleClass("reset-left");

            $("body").toggleClass("overflow");
          

        });

        //slide down menu
        $(".menu-item-has-children").click(function(e) {
            e.preventDefault();
            $(this).find(".sub-menu ").slideToggle(400);
            $(".menu-item-has-children ").not(this).find(".sub-menu ").slideUp(400);
            if ($(window).width() <= 991) {

                $(this).toggleClass("active");
                $(".menu-item-has-children ").not(this).removeClass("active");

            }
        });
    }

 //fixed nav
 $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    var $stickyNav = $(".top-header");
    var $stickyHeader = $("header");
    var windowWidth = $(window).width();
    // Handle fixed navigation
    $stickyNav.toggleClass("fixed-nav", scroll >= 200);
    // Handle fixed header
    if (lastScroll - scroll > 0 || (lastScroll - scroll >= 0 && windowWidth <= 991)) {
        $stickyHeader.addClass("fixed-header");
        $('.search-content').removeClass('height-when-close', 1000);
    }
  
    if (scroll === 0) {
        $stickyNav.removeClass("fixed-header");
        $stickyHeader.removeClass("fixed-header");
        $('.search-content').addClass('height-when-close', 500);
        $('.search-content').removeClass('height-when-open', 500);
        $('.search-btn').removeClass('close-search');
    }
    if (lastScroll - scroll < 0){
        $stickyNav.removeClass("fixed-header");
        $stickyHeader.removeClass("fixed-header");
    }
    lastScroll = scroll;
});

var lastScroll = 0;



    //////////** fixed arrow to top**//////////
    $(".arrow-top").click(function() {
        $("html,body").animate({
                scrollTop: 0,
            },
            1000
        );
    });
    $(this).scrollTop() >= 500 ?
        $(".arrow-top").fadeIn(300) :
        $(".arrow-top").fadeOut(300);

    $(window).scroll(function() {
        $(this).scrollTop() >= 500 ?
            $(".arrow-top").fadeIn(300) :
            $(".arrow-top").fadeOut(300);
    });


    ///////// **test-section** /////////

    var test = new Swiper(".test-slider .swiper-container", {
        loop: true,
        autoplay: true,
        pagination: {
            el: ".test-slider .swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".test-slider .swiper-btn-next",
            prevEl: ".test-slider .swiper-btn-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            1199: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },
    });




    ////////////** footer transfer into accordion **//////////

    if ($(window).width() <= 991) {
    $(".footer-accordion").click(function () {
      var x = $(this).siblings().prop("scrollHeight") + 15 + "px";
      $(".footer-accordion").not(this).removeClass("active");
      $(this).toggleClass("active");
      if ($(this).siblings().css("max-height") == "0px") {
        $(this).siblings().css("max-height", x);
        $(this).siblings(".nav-foot").css("padding-top", "15px");
      } else {
        $(this).siblings().css("max-height", "0");
        $(this).siblings(".nav-foot").css("padding-top", "0");
      }
  
    
    });
    };
});