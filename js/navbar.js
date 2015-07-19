$(document).scroll(function(){
	var navbar = $('.custom-navbar');
	var scrollTop = $(this).scrollTop();
	var navbtn = $('#nav-btn');
	if(scrollTop > 10){
		navbar.css({"background-color":"#2c3e50"});
		navbar.css({"position":"fixed"});
		navbar.css({"box-shadow":"0 5px 5px -3px rgba(0, 0, 0, 0.32)"});
		navbtn.css({"background-color":"#5bc0de"});
	} else if (scrollTop <= 1) {
		navbar.css({"background-color":"transparent"});
		navbar.css({"position":"absolute"});
		navbtn.css({"background-color":"transparent"});
		navbar.css({"box-shadow":""});
	}
});
