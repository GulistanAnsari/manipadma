 wow = new WOW(
  {
    animateClass: 'animated',
    offset:       200,
    callback:     function(box) {
      console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
    }
  }
);
wow.init();

// wow end

$(document).ready(function() {

    $('#pagepiling').pagepiling({
        menu: '#menu',
        //anchors: ['HOME', 'PURPOSE', 'MESSAGE', 'EVENT', 'CONTACT-US'],
        // sectionsColor: ['#F1F1F1', '#ee005a', '#2C3E50', '#39C'],
        navigation: {
            'position': 'right'
        },
        // afterRender: function(){
        //     $('#pp-nav').addClass('custom');
        // },
        // afterLoad: function(anchorLink, index){
        //     if(index>1){
        //         $('#pp-nav').removeClass('custom');
        //     }else{
        //         $('#pp-nav').addClass('custom');
        //     }
        // }
    });

});


// menu active
jQuery(".nav > li > a").each(function() {   
    if (this.href == window.location.href) {
        jQuery(this).addClass("active-nav");
    }
});

// Munu
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 10) {
        $(".nav-top").addClass("scroll");
    } else {
        $(".nav-top").removeClass("scroll");
    }
});


$('.banner-home-slider').owlCarousel({
    loop: true,
    autoplay: 80000,
    nav: true,
    dots: true,
    autoHeight: true,
    touchDrag: true,
    mouseDrag: true,
    margin: 0,
    navText: ["<img src='assets/img/prev.png'>","<img src='assets/img/next.png'>"],
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            autoHeight: false,
        },
        768: {
            items: 1,
            autoHeight: false,
        },
        1200: {
            items: 1,
        }
    },
});


$(".carousel").swipe({
  swipe: function(event, direction, distance, duration, fingerCount, fingerData) {

    if (direction == 'left') $(this).carousel('next');
    if (direction == 'right') $(this).carousel('prev');

  },
  allowPageScroll:"vertical"
});
