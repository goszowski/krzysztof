function build() {

	console.log('build');

	var scope = $('.scope.active');

	var track = $('.track');

	// console.log(scope[0].scrollHeight, track.height());

	while(scope[0].scrollHeight > track.height())
	{
		console.log('object moved');
		$('.block').first().clone().appendTo('.scope-2');
		$('.block').first().remove();
	}

	$('#main-preloader').fadeOut();

	var scopeActive = 1;
	var scopesCount = 2;

	setInterval(function() {

		scopeActive += 1;

		if(scopeActive > scopesCount)
		{
			scopeActive = 1;
		}

		$('.scope').removeClass('active');
		$('.scope-'+scopeActive).addClass('active');

	}, 1000);
}