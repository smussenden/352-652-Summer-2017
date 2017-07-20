$(document).ready(function() {
	$("#legendhide").click(function(){
		$(".legendbox").toggle();
		$("#legendhide span").toggle();
		$("#legendhide").toggleClass("btn-danger");
	});
});


