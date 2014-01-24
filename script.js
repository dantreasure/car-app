window.onload = function() {
	navigator.geolocation.getCurrentPosition(function(position) {
	    $('#latitude').html(position.coords.latitude);
	    $('#longitude').html(position.coords.longitude);
	    $('#heading').html(position.coords.heading);
	    $('#speed').html(position.coords.speed);
	    console.log(position);
	});

	navigator.geolocation.watchPosition(function(position) {
		$('#latitude').html(position.coords.latitude);
	    $('#longitude').html(position.coords.longitude);
	    $('#heading').html(position.coords.heading);
	    $('#speed').html(position.coords.speed);
	    console.log(position);
	});
};