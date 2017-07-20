$(document).ready(function() {
	/*This is first day jquery*/
	$("#legendhide").click(function(){
		$(".legendbox").toggle();
		$("#legendhide span").toggle();
		$("#legendhide").toggleClass("btn-danger");
	});

	/*This is second day jquery*/
	$("#nerdboxbutton").click(function(){
		$("#nerdboxbutton").toggleClass("btn-danger");
		$("#nerdboxbutton span").toggle();
		$("#nerdbox").delay(300).slideToggle();
		

	});


});


