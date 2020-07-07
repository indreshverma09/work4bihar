jQuery(document).ready(function($){

/*==========================*/  
/* Accordion */ 
/*==========================*/
$('.accordion-panel .panel-title').click(function(){
  if(!$(this).closest('.accordion-panel').hasClass('open')){
      $(this).closest('.accordion-container').find('.accordion-panel').removeClass('open');
      $(this).closest('.accordion-panel').addClass('open');
      $(this).closest('.accordion-container').find('.accordion-panel .panel-body').stop().slideUp();
      $(this).closest('.accordion-panel').find('.panel-body').stop().slideDown(function() {
      $('html, body').animate({
        scrollTop: $(this).offset().top - 177
      }, 200)
    });
  }else{
      $(this).closest('.accordion-container').find('.accordion-panel').removeClass('open');
      $(this).closest('.accordion-container').find('.accordion-panel .panel-body').stop().slideUp();
  }
});

/*==========================*/  
/* Scroll on animate */  
/*==========================*/
function onScrollInit( items, trigger ) {
  items.each( function() {
    var osElement = $(this),
        osAnimationClass = osElement.attr('data-os-animation'),
        osAnimationDelay = osElement.attr('data-os-animation-delay');
      
        osElement.css({
          '-webkit-animation-delay':  osAnimationDelay,
          '-moz-animation-delay':     osAnimationDelay,
          'animation-delay':          osAnimationDelay
        });

        var osTrigger = ( trigger ) ? trigger : osElement;
        
        osTrigger.waypoint(function() {
          osElement.addClass('animated').addClass(osAnimationClass);
          },{
              triggerOnce: true,
              offset: '95%',
        });

// osElement.removeClass('fadeInUp');
  
  });

}

 onScrollInit( $('.os-animation') );
 onScrollInit( $('.staggered-animation'), $('.staggered-animation-container'));




 
	// $('.search-icon a').click(function(){
	// 	  $('body').addClass('show-search');
	// 	  return false;
	// 	});
	// 	$('.close-search').click(function(){
	// 	  $('body').removeClass('show-search');
	// 	  return false;
	// 	});

	  $('.hero-slider').slick({
		  dots: true,
		  infinite: true,
		  arrows:true,
		  autoplay: true,
		  // fade:true,
		  autoplaySpeed: 4000,
		  speed: 300,
		  infinite: true,
		  responsive: [
		    
		    {
		      breakpoint: 768,
		      settings: {
		        arrows: false,
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        dots: true,
		      }
		    }
		  ]
		 
		});

  $('.timer').data('countToOptions', {
        formatter: function (value, options) {
          return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
        }
      }); 
      
      $('.timer').each(count);
 
      function count(options) {
        var $this = $(this);
        options = $.extend({}, options || {}, $this.data('countToOptions') || {});
        $this.countTo(options);
      }

	 
$(window).scroll(function() {	
if ($('.project-deatil-counters-box .project-deatil-counter-box ').length) {
       $('.project-deatil-counters-box .project-deatil-counter-box ').not('.animates').each(function(){
  if( $(window).scrollTop() >= $(this).offset().top-$(window).height() ) {
	   $(this).addClass('animates').find('.timer').countTo({
  from: 0,
    });
  }
 });
}
});

 $(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        
        $('#return-to-top').fadeIn(200);   
    } else {
        $('#return-to-top').fadeOut(200);   
    }
    });
    $('#return-to-top').click(function() {      
        $('body,html').animate({
            scrollTop : 0                     
        }, 500);
    });


/*==========================*/  
/* Logo Slider */  
/*==========================*/
 $('.logo-slider').bxSlider({

  minSlides: 1,
        maxSlides: 8,
        slideWidth: 240,
        slideMargin: 10,
        ticker: true,
        tickerHover: true,
        speed: 40000
 });  


/*==========================*/	
/* Google Map */	
/*==========================*/
	if($('#map-canvas').length != 0){
		var map;
		function initialize() {
			var mapOptions = {
				zoom: 15,
				scrollwheel: false,
			 	center: new google.maps.LatLng(25.932884, 83.569633),
			 	styles: [
							{"stylers": [{ hue: "#ce9f51" },
							{ saturation: -100 },
							{ lightness: 0 }]},
    					{
					      "featureType": "road",
					      "elementType": "labels",
					      "stylers": [{"visibility": "off"}]
					    },
					    {
					      "featureType": "road",
					      "elementType": "geometry",
					      "stylers": [{"lightness": 100},
					            {"visibility": "simplified"}]
					    }
			 	]
			};
			map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
			var image = 'include/images/map-marker.png';
			var myLatLng = new google.maps.LatLng(25.932884, 83.569633);
			var beachMarker = new google.maps.Marker({
				position: myLatLng,
				map: map,
				icon: image
			 });
		}

		google.maps.event.addDomListener(window, 'load', initialize);
	}

    /*==========================*/  
/* Header fix */  
/*==========================*/
  var scroll = $(window).scrollTop();

    if (scroll >= 30) {
        $("body").addClass("fixed");
    } else {
        $("body").removeClass("fixed");
    }
  $(window).scroll(function() {    
      var scroll = $(window).scrollTop();

      if (scroll >= 30) {
          $("body").addClass("fixed");
      } else {
          $("body").removeClass("fixed");
      }
  });

});

   
 
