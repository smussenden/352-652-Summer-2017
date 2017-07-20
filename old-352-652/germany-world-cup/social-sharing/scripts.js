$(document).ready(function() {
	$("#legendhide").click(function(){
		$(".legendbox").toggle();
		$("#legendhide span").toggle();
		$("#legendhide").toggleClass("btn-danger");
	});

	$('body').scrollspy({ target: '.navbar' }); /*One line of jquery to turn on scrollspy, goes in document ready function below other function*/
});


