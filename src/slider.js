function build() {

	console.log('build');

	var scope = $('.scope.active');

	// var track = $('.track');
	var trackHeight = $(window).height() - 415;

	// console.log(scope[0].scrollHeight, trackHeight);

	// while(scope[0].scrollHeight > trackHeight)
	// {
	// 	console.log('object moved');
	// 	$('.block').first().clone().appendTo('.scope-2');
	// 	$('.block').first().remove();
	// 	console.log(scope[0].scrollHeight, trackHeight);
	// }

	$('#main-preloader').fadeOut();

	var scopeActive = 1;
	var scopesCount = $('.scope').length;

	setInterval(function() {

		scopeActive += 1;

		if(scopeActive > scopesCount)
		{
			scopeActive = 1;
		}

		$('.scope').removeClass('active');
		$('.scope-'+scopeActive).addClass('active');

	}, 2000);
}