$(document).ready(function(){
	

	
//left
    
//  join_id 
//	.address_select option value 직접입력 ~ 자동 입력 선택 
	$("#welcome_id").css("color","#666666");
	$("#email_2").css("color","#666666");
	

	$(".address_select").change(function(){
		$("#email_2").val( $(this).val() );
		if( $(this).val() == "" ){
			$("#email_2").val("입력하세요")
				.css("color","#666666")
				.one("focus",function(){
				$(this).val("");
			});
		}
	});
	
//   email 미입력시 alert 
	$("#checkout_list").submit(function(){
		if( $("#welcome_id").val()== "" || $("#email_2").val()== "" ){
			if($("#welcome_id").text() == "" || $("#welcome_id").text() == ""){
			   $("#welcome_id").css("border","1px dotted #a2171e");
			   $("#email_2").css("border","1px dotted #a2171e");
				alert("이메일을 입력하세요");
			}
		return false;
		}
	});
    
//   비밀번호 미입력시 alert 
	$("#checkout_list").submit(function(){
		if( $("#member_pwd").val()== ""){
			if($("#member_pwd").text() == ""){
			   $("#member_pwd").css("border","1px dotted #a2171e");
			   $("#member_pwd").css("border","1px dotted #a2171e");
				alert("비밀번호 입력하세요");
			}
		return false;
		}
	});
    
//   비밀번호확인 미입력시 alert 
	$("#checkout_list").submit(function(){
		if( $("#member_pwd_retext").val()== ""){
			if($("#member_pwd_retext").text() == ""){
			   $("#member_pwd_retext").css("border","1px dotted #a2171e");
			   $("#member_pwd_retext").css("border","1px dotted #a2171e");
				alert("비밀번호 확인을 입력하세요");
			}
		return false;
		}
	});    
    
//  비밀번호 / 비밀번호 확인이 일치 하지 않을 때 
    $("#checkout_list").submit(function(){
        var pwd1 =$("input[name='pwd1']").val();
        var pwd2 =$("input[name='pwd2']").val();
        if(pwd1 != pwd2){
            alert("비밀번호가 일치하지 않습니다.");
            $("#member_pwd").css("border","1px dotted #a2171e");
            $("#member_pwd_retext").css("border","1px dotted #a2171e");
        }
        return false;
    });
	
//right 
    
//	#join_top_right	
//	이름 placeholder
	$("#user_name")
		.val("입력하세요")
		.css("color","#666666")
		.one("focus",function(){
			$(this).val("");
		}).blur(function(){
        if($(this).val()==""){
            $(this).val("").css("color","#666666")
            .one("focus",function(){
                $(this).val("").css("color","#666666");
            });
        }
    });
	
//	연락처 placeholder
	$("#user_number")
		.val("예: 01012345678")
		.css("color","#666666")
		.one("focus",function(){
			$(this).val("");
		}).blur(function(){
        if($(this).val()==""){
            $(this).val("").css("color","#666666")
            .one("focus",function(){
                $(this).val("").css("color","#666666");
            });
        }
    });
	
//	생년월일 placeholder
		$("#user_birthday")
		.val("예: 2021.08.10")
		.css("color","#666666")
		.one("focus",function(){
			$(this).val("");
		}).blur(function(){
        if($(this).val()==""){
            $(this).val("").css("color","#666666")
            .one("focus",function(){
                $(this).val("").css("color","#666666");
            });
        }
    });

    
//이름 미입력시 alert 
	$("#checkout_list").submit(function(){
		if( $("#user_name").val()== ""){
			if($("#user_name").text() == ""){
			   $("#user_name").css("border","1px dotted #a2171e").val("입력하세요");
				alert("이름을 입력하세요.");
			}	
		}
	});   

//이름 미입력시 alert 
	$("#checkout_list").submit(function(){
		if( $("#user_number").val()== ""){
			if($("#user_number").text() == ""){
			   $("#user_number").css("border","1px dotted #a2171e").val("예: 01012345678");
				alert("연락처를 입력하세요.");
            }
		}
	});  
    
//생년월일 alert 
	$("#checkout_list").submit(function(){
		if( $("#user_birthday").val()== ""){
			if($("#user_birthday").text() == ""){
			   $("#user_birthday").css("border","1px dotted #a2171e").val("예: 2021.08.10");
				alert("생년월일을 입력하세요.");
            }
		}
	}); 
    
//bottom 
// check box 버튼 변경 전체 선택 
    $("#all_agree").change(function(){
        var checklist = $("#all_agree").prop("checked");
        if(checklist == true){
            $("#required_infomation, #essential, #choice_service").prop("checked","true");
            $(".checklist").addClass("checked");
        }else{
            $("#required_infomation, #essential, #choice_service").prop("checked","false");
            $(".checklist").removeClass("checked");
        }
    });
    
    
// 체크박스 항목 선택 
    $("#required_infomation, #essential, #choice_service").change(function(){
    var chk_list2 = $("#required_infomation").prop("checked");
    var chk_list3 = $("#essential").prop("checked");
    var chk_list4 = $("#choice_service").prop("checked");

        if(chk_list2 == true){
            $(".list2").addClass("checked");
        }else{
            $(".list2").removeClass("checked");    
        }
        
// 
        if(chk_list3 == true){
            $(".list3").addClass("checked");
        }else{
            $(".list3").removeClass("checked");    
        }
        
        if(chk_list4 == true){
            $(".list4").addClass("checked");
        }else{
            $(".list4").removeClass("checked");    
        }
        
        
//체크항목 해지시 전체선택 해제  
        if(chk_list2 == true && chk_list3 == true && chk_list4 == true){
            $("#all_agree").prop("checked","true");
            $(".list1").addClass("checked");
        }else{
            $("#all_agree").prop("checked","false");
            $(".list1").removeClass("checked");
        }
    });
    
    
//체크항목 미 체크시 alert
    $("#checkout_list").submit(function(){
		  var unchecked1 = $("#required_infomation").prop("checked");
		  var unchecked2 = $("#essential").prop("checked");        
            if(unchecked1 == false || unchecked2 == false ){
                alert("필수동의를 체크하세요.");
            }
	}); 
    




});//end