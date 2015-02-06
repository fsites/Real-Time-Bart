//API KEY ZJVZ-JI6Y-IMGQ-DT35

$(document).ready(function() {
	//hides display table on page load
	$('.display-table').hide();
	//gets value of dropdown on submit
	$('.submit').submit(function(){
		var times = $('#selection').val();
		getResults(times);
		console.log("times is " + times);
		return false;
	});
});

/*var getResults = function(times) {

};*/
