$(document).ready(function() {
	//Hides display table and refresh on page load
	$('.display-table').hide();
	$('#refresh').hide();

	//Gets value of dropdown on submit. Clears previous results

	$('#selection').on('change', function() {selectChange();});
	$('#refresh').on('click', function() {selectChange();});

	var selectChange = function(){
		$('.display-table tr').hide();
		$('#refresh').hide();
		var station = $('#selection').val();
		getResults(station);
		return false;
	};
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
	//PULLS DATA NEEDED FROM RESULTS
	.done(function(xml){
		$(xml).find('etd').each(function() {
			var destination = $(this).find('abbreviation').text();
			var times = [];
			//Pushes to empty array
			$(this).find('minutes').each(function () {
				var timeText = $(this).text()
				
				if (timeText === "Leaving") {
					times.push("<1 min");
				} else {
					times.push(timeText + "min")
				}
			});
			//Joins and formats times
			times = times.join(', ');
			showResults(destination, times);
		});
	});
};

//APPENDS ITEMS TO TABLE
var showResults = function(destination, times) {
	$('.display-table').append('<tr><td id="departure-station">' 
		+ destination 
		+ '</td><td id="departure-times">' 
		+ times 
		+ '</td></tr>');
	$('.display-table').fadeIn(100);
	$('#refresh').fadeIn(100);
};