//GLOBAL VARIABLES
var station = $('#selection').val();

$(document).ready(function() {
	//hides display table on page load
	$('.display-table').hide();
	//gets value of dropdown on submit
	$('.submit').click(function(){
		getResults(station);
		console.log("times is " + station);
		return false;
	});
});

//REQUESTS DEPARTURES
var getResults = function(station) {
	var result = $.ajax({
		url: 'http://api.bart.gov/api/etd.aspx',
		data: {
			cmd: 'etd',
			orig: station,
			key: "ZJVZ-JI6Y-IMGQ-DT35"
		},
		dataType: 'xml'
	});
	console.log(result);
};

var showResults = function() {
	$('.display-table').show();
}