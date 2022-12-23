$(document).ready(function(){

  $('#main-slider').owlCarousel({
      loop:true,
      margin:0,
      nav:true,
      items:1,
      autoplay:true,
      autoplayTimeout:4000,
      autoplayHoverPause:false,
      smartSpeed: 1000,
      dots:false,
      navText : ['PREV', 'NEXT'],
      responsive:{
        0:{

      },
        600:{

      },
        1000:{

      }
    }
  })
});