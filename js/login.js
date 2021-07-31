$(document).ready(function(){

//	id_wrap	
	$("#id_wrap > #memer_id").focus(); 
    
    $("#login_btn").click(function(){

		var id = $("#member_id").val();
		var pwd = $("#member_pwd").val();		
		
		if( id == "" || pwd == ""){
			alert("빈칸을 모두 입력해 주세요.");
            $("#member_id").focus();
		}
       
		return false;		
	});    
    



});//end