

 





(function ($) {
    "use strict";

    $(document).ready(function () {
        $('.dri-product-slider-call').owlCarousel({
            autoplay: true,
            items:4,
            loop:true,
            margin:20,
            dots:true,
          nav:true,
          pagination :false,
            responsive:{

                0:{
                items: 1
                },
                600:{
                items: 2
                },
                991:{
                items: 3
                },

                1200:{
                    items:4,
                }
            }
        });

        $('.instagram-feed__colm.owl-carousel').owlCarousel({
            items:2,
            loop:true,
            margin:10,
            center:false,
            responsive:{
                0:{
                items: 2
                },
                600:{
                items: 3
                },
                991:{
                items: 4
                },
                
                1200:{
                    items:6,
                }
            }
        });



        $('.mobile_img_scroll.owl-carousel').owlCarousel({
            items:1,
            loop:true,
            margin:10,
            center:true,
            dots:true,
             autoplay: true,
            responsive:{
                0:{
                items: 1
                },
                600:{
                items: 1
                },
                991:{
                items: 1
                },
                
                1200:{
                    items:1,
                }
            }
        });
      
      
      
    });

var lastScroll = 0;
  
 jQuery(document).ready(function($) {
    $(".shopify-section-header").addClass("header_hidden");

    $(window).scroll(function(){
        setTimeout(function() { //give them a second to finish scrolling before doing a check
            var scroll = $(window).scrollTop();
            if (scroll > lastScroll + 10) {
                $(".shopify-section-header").removeClass("header_hidden");
            } else if (scroll < lastScroll - 10) {
                $(".shopify-section-header").addClass("header_hidden");
            }
            lastScroll = scroll;
        }, 100);
    });
}); 
  
// Show the first tab by default
$('.tabs-stage .tab_contentss').hide();
$('.tabs-stage .tab_contentss:first').show();
$('.tabs-nav li:first').addClass('tab-active');

// Change tab class and display content
$('.tabs-nav a').on('click', function(event){
  event.preventDefault();
  $('.tabs-nav li').removeClass('tab-active');
  $(this).parent().addClass('tab-active');
  $('.tabs-stage .tab_contentss').hide();
  $($(this).attr('href')).show();
}); 

  
  
  
  

  
  
  
  
  
  
  
  
}(jQuery));