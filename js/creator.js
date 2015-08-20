var main = function() {
	arrange();
}

var arrange = function() {
	var w = $(window).width();
	var h = $(window).height();
	
	var logo = $('.logo');
	logo.css('left', w - 130);
	
	var content = $('.content');
	content.css('width', w - 60);
	content.css('height', h - 200);
	
	$('.filler').css('height', $('.sidebar').innerHeight() - $('.item').outerHeight()*4 - 40);
}

$(window).resize(arrange);
$(document).ready(main);