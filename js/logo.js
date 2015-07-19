/*
var modal = $('#loginModal');
var logo = $('#bg-img');

$(document).ready(function(){
	if ($("modal").modal('show')=true){
		
	}
	
});
	
/*	
$(toggleTable).click(function(){
	$("table").toggle('slow', 'jswing');
});

*/


$(document).ready(function(){
	
	var regWrapper = $('#register-wrapper');
	regWrapper.hide();
	
	var bgFilter = $('#bg-filter');
	var bgImg = $('#logo-font');
	var signUpBtn = $('#signUpBtn');
	signUpBtn.click(function(){
		bgImg.hide();
		bgFilter.hide();
		regWrapper.show();
	});

});
