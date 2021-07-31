$(document).ready(function(){

// body -  히스토리scroll event
	
//$("#cocacola_headtop").before("<p class='addcoke'>0</p>"); 
//$(".addcoke").css({"position":"fixed","right":"0","top":"0","margin":"0","padding":"0","color":"red"});	 	
	
	$("#history_left").css({opacity:"0"});
	
	$(window).scroll(function(){
//		$(".addcoke").text( parseInt ($(this).scrollTop())); 
		
		if($(this).scrollTop() > 970  &&  $(this).scrollTop() < 9690){
			$("#history_left").css({"position":"fixed","top":"0px","left":"800","opacity":"1"});
		}else{
			$("#history_left").css({"position":"","opacity":"0"});
		}
		
	}); //scroll event end;





});//end