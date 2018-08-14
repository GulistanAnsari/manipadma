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
        // anchors: ['page1', 'page2', 'page3', 'page4'],
        sectionsColor: ['#F1F1F1', '#ee005a', '#2C3E50', '#39C'],
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