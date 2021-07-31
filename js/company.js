$(document).ready(function(){

//지도 마우스오버  
$(".america1").mouseover(function(){
		$("#world_map").attr("src","images/map/america01.png");
	});
	$(".america2").mouseover(function(){
		$("#world_map").attr("src","images/map/america02.png");
	});
	$(".euroup").mouseover(function(){
		$("#world_map").attr("src","images/map/euro_africa.png");
	});

	$(".asia").mouseover(function(){
		$("#world_map").attr("src","images/map/asia.png");
	});
	
//지도 클릭시 튕김 방지 
	$(".america1").click(function(){
		return false;
	});
	$(".america2").click(function(){
		return false;
	});
		$(".euroup").click(function(){
		return false;
	});
		$(".asia").click(function(){
		return false;
	});













});//end