/* dark theme
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
*/
/*
$(document).scroll(function(){
	var navbar = $('.custom-navbar');
	var navbarMenu = $('.custom-navbar-menu');
	var scrollTop = $(this).scrollTop();
	var navbtn = $('#nav-btn'); 
	if(scrollTop > 10){
		navbar.css({"background-color":"#ffffff"});
		navbar.css({"position":"fixed"});
		navbar.css({"box-shadow":"0 5px 5px -3px rgba(0, 0, 0, 0.32)"});
		navbtn.css({"background-color":"#5bc0de"});
		navbarMenu.css({"color":"#34495e"});
	} else if (scrollTop <= 1) {
		navbar.css({"background-color":"transparent"});
		navbar.css({"position":"absolute"});
		navbtn.css({"background-color":"transparent"});
		navbar.css({"box-shadow":""});
		navbarMenu.css({"color":"#ffffff"});
	}
});
*/
$(document).ready(function(){
// hide searchfield
	var searchField = $('#id_search-field');
	searchField.hide();

/*	hide searchField by clicking on body
	var body =$ ('body');
	$(body).click(function(){
	searchField.hide('slow', 'jswing');	
	});
*/
	
// toggle searchField
	var searchBtn = $('#id_search-btn');
	searchBtn.click(function(){
	searchField.toggle('slow', 'jswing');	
	});	
	
	
	$(document).scroll(function(){
		var navbar = $('.custom-navbar');
		var navbarMenu = $('.custom-navbar-menu');
		var scrollTop = $(this).scrollTop();
		var navbtn = $('#nav-btn'); 
		if(scrollTop > 10){
			navbar.css({"background-color":"#ffffff",
						"position":"fixed",
						"box-shadow":"0 5px 5px -3px rgba(0, 0, 0, 0.32)"});
			navbtn.css({"color":"#34495e"});
			navbarMenu.css({"color":"#34495e"});
		} else if (scrollTop <= 1) {
			navbar.css({"background-color":"transparent",
						"position":"absolute",
						"box-shadow":""});
			navbtn.css({"color":"white"});
			navbarMenu.css({"color":"#ffffff"});
		}
	});
});