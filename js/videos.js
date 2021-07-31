$(document).ready(function(){

	
//videos_menu_wrap 	
$(".menu_all").click(function(){
	$("#play_container01, #play_container02 , #play_container03 , #play_container04, #play_container05, #play_container06 , #play_container07").fadeOut(100).fadeIn(1000);
	return false;
});

$(".menu_brand").click(function(){
	$("#videos_play_wrap > div").fadeOut(100).hide();
	$("#play_container01, #play_container02 , #play_container03 , #play_container04").fadeIn(1000).show();

	return false;
});

$(".menu_culture").click(function(){
	$("#videos_play_wrap > div").fadeOut(100).hide();
	$("#play_container05, #play_container06").fadeIn(1000).show();
	return false;
});

$(".menu_music").click(function(){
	$("#videos_play_wrap > div").fadeOut(100).hide();
	$("#play_container07").fadeIn(1000).show();
	return false;
});


});//end