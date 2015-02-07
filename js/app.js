$(document).ready(function() {
	//hides display table on page load
	$('.display-table').hide();
	//gets value of dropdown on submit
	$('.submit').click(function(){
		var station = $('#selection').val();
		console.log("station is " + station);
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
	.done(function(result){
		$(result).find('etd').each(function(i, data){
			var returnData = showResults(data);
			$('.display-table').append(returnData)
		})
	})
	console.log(result);


};

var showResults = function(data) {
	$('.display-table').show();
}