var toggleTable = $('#btn-events');
var table = $('#hide-events');

var ourSkills = $('#our-skills');
var devSkills = $('#toggle-dev-skills');

$(document).ready(function(){
	$("table").hide();
	$("ourSkills").hide();
});
	
	
$(toggleTable).click(function(){
	$("table").toggle('slow', 'jswing');
});



$(devSkills).click(function(){
	$("ourSkills").toggle('slow', 'jswing');
});

