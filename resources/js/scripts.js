/* Scroll on buttons */
	$('.js--scroll-to-about').click(function(){
		$('html, body').animate({scrollTop: $('.js--section-about').offset().top}, 1000)
	})

	$('.js--scroll-to-projects').click(function(){
		$('html, body').animate({scrollTop: $('.js--section-projects').offset().top}, 1000)
	})

	$('.js--scroll-to-contact').click(function(){
		$('html, body').animate({scrollTop: $('.js--section-contact').offset().top}, 1000)
	})

	/* Navigation Scroll*/
	$(function() {
	  $('a[href*="#"]:not([href="#"])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});