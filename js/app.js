$(document).ready(function() {
	//hides display table on page load
	$('.display-table').hide();
	//gets value of dropdown on submit
	$('.submit').click(function(){
		var station = $('#selection').val();
		console.log("depart station is " + station);
		getResults(station);
		return false;
	});
});

//REQUESTS DEPARTURES
var getResults = function(station) {

	//XML Results
	var result = $.ajax({
		url: 'http://api.bart.gov/api/etd.aspx',
		data: {
			cmd: 'etd',
			orig: station,
			key: "ZJVZ-JI6Y-IMGQ-DT35"
		},
		dataType: 'xml',
		type: 'GET'
	})
	.done(function(xml){
		$(xml).find('etd').each(function() {
			var destination = $(this).find('destination').text();
			var times = $(this).find('minutes').text();
			console.log('departure times for ' + destination + times);
			showResults(destination, times);
		});

	});
};

var showResults = function(destination, times) {
	$('.display-table').show();
	$('.display-table').append('<tr><td>' 
		+ destination 
		+ '</td><td>' 
		+ times 
		+ '</td></tr>');
};