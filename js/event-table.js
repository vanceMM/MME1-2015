var toggleTable = $('#btn-events');
var table = $('#hide-events');

$(document).ready(function(){
	$("table").hide();
});
	
$(toggleTable).click(function(){
	$("table").toggle('slow', 'jswing');
});