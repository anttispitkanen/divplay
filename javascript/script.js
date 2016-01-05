function gridMaker(numberOfSquares) {
	
	var sideLength = 600 / numberOfSquares;

	for (var i = 0; i < numberOfSquares; i++) {
		$('.gridcontainer').append('<div class="basic">');
		
		for (var j = 1; j < numberOfSquares; j++) {
			$('.gridcontainer').append('<div class="basic">');
		}
	}
	
	$('.gridcontainer div').css({'height': sideLength+'px', 'width': sideLength+'px'});

}

function resetGrid() {
	
	$('.gridcontainer').empty();
	
}



$(document).ready(function() {
	
	gridMaker(16);
	
	$('.gridcontainer div').mouseenter(function() {
		//$(this).addClass('colored');
		if($(this).css('opacity') < 1) {
			$(this).css('opacity', '+=0.1');
		};
	});
	
	
	
	$('button').on('click', function() {
		
		resetGrid();
		
		var squares = prompt('How wide a grid would you fancy, sire?');
		
		gridMaker(squares);
		
		$('.gridcontainer div').mouseenter(function() {
			//$(this).addClass('colored');
			if($(this).css('opacity') < 1) {
				$(this).css('opacity', '+=0.1');
			};
		});
		
		
	});
	
	
	
	
	
});