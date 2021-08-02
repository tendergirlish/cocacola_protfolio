$(document).ready(function(){
	
//top
//검색 focus보이기 /숨기기
	$("#world_coke_wrap").hide();
    	
    $(".search > p").hide(0);
    
    $(".search").bind("mouseover",function(){
        $(".search > p").stop().slideDown();   

    }).mouseout(function(){
        
        var hold = $("#coke_search").is(":focus");

        if( hold == true){
           $("#coke_search").focus();              
        }else{
            $(".search > p").stop().slideUp(500); 
        }            
    }).focusout(function(){
        $(".search > p").stop().slideUp(500);
        $("#coke_search").val("");
    });

    
//top 전 세계 사이트맵 cocacola_world	site
//배경추가 
	$("#world_coke_wrap").before("<p class='back'></p>");
	
//하위 ul 보이기/숨기기
	$("#world_coke_wrap ul, .back").hide(0);
	
    var world = false;
	$(".cocacola_world i").click(function(){
        $("#cocacola_headtop.fixed_menu").css("background-color","rgba(255,255,255,0.9)");
        
		world =! world;
		if(world == false){
            $("#world_coke_wrap ul, .back").slideUp();
            $("#world_coke_wrap").hide();
		}else{
            $("#world_coke_wrap").show();
            $("#world_coke_wrap ul, .back").slideDown("slow");
		}
	});  
   

// 스크롤시 메뉴 고정 scroll fixed menu bar     
    $(window).scroll(function(){
        
        if( $( this ).scrollTop() > 200){
            $("#cocacola_headtop").addClass("fixed_menu");
        }else{
            $("#cocacola_headtop").removeClass("fixed_menu");
        }      

    $("#cocacola_top").mouseover(function(){        
        $("#cocacola_headtop.fixed_menu").css("background-color","rgba(255,255,255,0.9)");
        
    }).mouseout(function(){            
        var hold = $("#coke_search").is(":focus");  
        var hold2 = $(".cocacola_world i").is(":focus")
                    
        if( hold || hold2 == true){
            $("#cocacola_headtop.fixed_menu").css("background-color","rgba(255,255,255,0.9)");
			$("#cocacola_headtop").css("background-color","rgba(255,255,255,0.9)");
        }else{
       $("#cocacola_headtop.fixed_menu").css("background-color","rgba(255,255,255,0.9)");
//			$("#cocacola_headtop").css("background-color","");            
        }        
        
        $("#cocacola_headtop.fixed_menu").css("background-color","");
        
    }).focusout(function(){          
        $("#cocacola_headtop.fixed_menu").css("background-color","");      

        });

    });   //scroll function end;


	
//bottom 	
//family_site 드롭다운 
	$("#family_site > ul").slideUp(0);
	
	var down = 1; 
	$("#family_site > button").click(function(){
		if(down == 1){
			$("#family_site ul:not(:animated)").slideDown("fast");
			$(".updown").text("∨");
			$("#family_site button , #family_site button > span").css("color","rgba(255,255,255,0.8)");
			down = 0;
		}else{
			$("#family_site > ul:not(:animated)").slideUp("fast");
			$(".updown").text("∧");
			$("#family_site button , #family_site button > span").css("color","");
			down = 1;
		}	
	});
	$("#family_site > ul > li > a").click(function(){
		$("#family_site > ul").slideUp(0);
		down = 1;
		$(".updown").text("∧");
		$("#family_site button , #family_site button > span").css("color","rgba(255,255,255,0.8)");
	});

    
//    resize

// 스크롤 탑
	$("#top_icon").click(function(){       
		$("html, body").stop().animate({scrollTop:0},1000);
	});
	
	
	
});//end