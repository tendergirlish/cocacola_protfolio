$(document).ready(function(){
	
	
//바디 메뉴 호버 다운 
$(".all div").hide();
	$(".all").mouseenter(function(){
		$(".all div:not(:animated)").slideDown("slow");
		 $("#all_list_a").addClass("change");   
	}).mouseleave(function(){
		$(".all div:not(:animated)").slideUp();
		$("#all_list_a").removeClass("change"); 
		return false;
	});
	
//메뉴 버튼 누를때 튕김 방지 	
	$("#all_list_a").click(function(){
		return false;
	});

// grid
	var all= $("#all_list")
	var food = $("#food");
	var travel = $("#travel");
	var sports = $("#sports");
	var culture = $("#culture");
	var ambassador = $("#ambassador");
	var grid = $("#life_contents_wrap");


grid.isotope({
		itemSelector:".life-item",
		masonry:{columnWidth:776}
});

	all.click(function(){
		grid.isotope({filter:".life"});
		return false;
	});	
	
	food.click(function(){
		grid.isotope({filter:".food"});
		return false;
	});	
	
	travel.click(function(){
		grid.isotope({filter:".travel"});
		return false;
	});
	
	sports.click(function(){
		grid.isotope({filter:".sports"});
		return false;
	});
	culture.click(function(){
		grid.isotope({filter:".culture"});
		return false;
	});	
	
	ambassador.click(function(){
		grid.isotope({filter:".ambassador"});
		return false;
	});

}); //end