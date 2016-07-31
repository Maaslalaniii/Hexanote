$(function() {
	setTimeout(function() {
		$('.hexanote').removeClass('hidden');
	}, 500);

	$('#lead').delay(3000).animate({marginTop: '-=250px'}, {duration: 750});
	$('.hexagon').delay(3500).animate({opacity: '1'}, {duration: 750});
})();