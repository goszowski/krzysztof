var build = function() {

	$('#main-preloader').fadeOut(300);

	var slides = $('slide');
	var slidesCount = slides.length;
	var totalTime = 0;
	var slideNumber = 0;

	slides.removeClass('active');
	slides.find('video').each(function(){
		$(this).get(0).play();
	});

	slides.each(function(){
		
		var slide = $(this);
		var delay = slide.data('delay');

		setTimeout(function(){

			var slideVideo = slide.find('video');

			if(slideVideo.length)
			{
				slideVideo.get(0).currentTime = slideVideo.data('start');
				slideVideo.get(0).play();

				slideVideo.get(0).addEventListener("canplaythrough", function() {
				  // Ready to play whole video?
				  // slideVideo.parent().find('preloader').fadeOut(200);
				}, false);
			}

			slide.prev().removeClass('active');
			slide.addClass('active');

			slideNumber++;

			if(slideNumber >= slidesCount)
			{
				setTimeout(build, delay);
			}

		}, totalTime);

		totalTime += delay;


	});
}