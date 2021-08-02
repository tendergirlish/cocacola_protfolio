$(document).ready(function(){

	
//top - notice  	
//안내문 slide
	$("#notice").hide();
	$("#notice").delay(700).slideDown(500);

	$("#notice a").click(function(){
		$("#notice").slideUp(500);
	});
	
//resize
	$(window).resize(function(){
		var width = parseInt($(this).width());
		if(width > 1920){
			$("body").css("width","100%");
		}else if( width <= 1920){
			$("body").css("width","1920px");
		}else{
			$("body").css("width","1920px");
		}
	});	//resize end;
	
// body - cocacola_pictorial scroll top 		
//$("#cocacola_headtop").before("<p class='addcoke'>0</p>"); 
//$(".addcoke").css({"position":"fixed","right":"0","top":"0","margin":"0","padding":"0","color":"red"});	 	
$("#cocacola_pictorial div p:not(:last)").css("opacity","0"); //cocacola_pictorial div > p 숨김
	
$(window).scroll(function(){
	$(".addcoke").text( parseInt ($(this).scrollTop() )); // 스크롤 위치 값 보기
		if( $(this).scrollTop() > 900){
			$(".photo_citycf1").animate({opacity:"1"});
		}
		if( $(this).scrollTop() > 1300){
			$(".photo_citycf2").animate({opacity:"1"});
		}
		if( $(this).scrollTop() > 1750){
			$(".photo_citycf3").animate({opacity:"1"});
		}		
		if( $(this).scrollTop() > 2000){
			$(".photo_citycf5").animate({opacity:"1"},"slow");
		}	
		if( $(this).scrollTop() > 2400){
			$(".photo_citycf4").animate({opacity:"1"},"slow");
		}	
});// scroll function end;



});//end; 