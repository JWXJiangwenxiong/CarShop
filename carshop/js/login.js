$(function(){
	var isTrue = false;
	$(".login_list").find("input").val("")
	$("span").css("color","red").css("fontSize","12px");
	$(".username").attr("maxlength","16");
	$(".username").bind("input propertychange",function(){
		var oValue = $(this).val().replace(/\s/g, "");
				
				$(this).val(oValue);
				if(/\d/.test(oValue[0])){
					$(".username_span").css("color","red")
					$(".username_span").html("<img src ='images/error.gif'/>首字符应为字母") 
				}else if(oValue.length > 18 || oValue.length < 6){
					$(".username_span").css("color","red")
					$(".username_span").html("<img src ='images/error.gif'/>用户名的长度是6~18位") 
				}else if(/\W+/.test(oValue)){
					$(".username_span").css("color","red")
					$(".username_span").html("<img src ='images/error.gif'/>用户名只能由数字、字母和下划线组成")
				}else{
					$(".username_span").css("color","green")
					$(".username").css("border","1px solid #999")
					$(".username_span").html("√ 您可以使用这个用户名")
					isTrue = true;
				}
	 })
	var i = 0;
	$(".enter").click(function(){
		if(i == 0){
			i = 1;
			var oEnter = $('<div class = "enter2"><h4>帐号登录</h4><p>用户名:<input type = "text" /></p><p>密码:  <input type = "text" /></p><button class = "close">关闭</button><button id = "isEnter">点击登录</button></div>');
				oEnter.css({"position":"absolute","background":"#91b7ea","height":"180px","width": "300px","color": "#fff","textAlign":"center"});
				oEnter.css({"left":($(window).width() - oEnter.outerWidth()) / 2,"top":($(window).height() - oEnter.outerHeight()) / 2 + $(window).scrollTop()})
				oEnter.find("h4").css({"background":"#0dc9d5","height":"30px","width": "300px","color": "#fff","font":"18px/30px ''","fontWeight":"bold","textAlign":"center"})
				oEnter.find("p").css({"height":"40px","width": "300px","color": "#fff","font":"14px/30px ''","fontWeight":"bold","margin":"10px 0"})
				oEnter.find("input").css({"height":"30px","width": "200px","border":"1px solid #999","background":"#fff","marginLeft":"10px"})
				$("body").append(oEnter);
			}
				$(".close").click(function(){
					i=0;
				$(".enter2").remove();
				});
				$("#isEnter").click(function(){
					i=0;
				$(".enter2").remove();
				alert("登录中。。。")
				});
	})
	$("input").blur(function(){
		if ($(this).val()=="") {
			$(this).siblings("span").html("");
		}
	})

	$(".password").attr("maxlength","16");
	$(".password").bind("keyup",function(){
		$(".password_span").css("color","red")
		if($(this).val().length > 18 || $(this).val().length < 6){
			$(".password_span").css("color","red")
			$(".password_span").html("<img src ='images/error.gif'/>密码长度是6~18位");
		}else{
			if(/\d+/.test($(this).val()) && /[a-z]+/.test($(this).val()) && /[A-Z]+/.test($(this).val())){
				$(".password_span").css("color","green");
				$(".password_span").html("【强】");
				$(".password").css("border","1px solid #999")
				isTrue = true;
			}else if(/^\d+$/.test($(this).val()) || /^[a-z]$/.test($(this).val()) || /^[A-Z]$/.test($(this).val())){
				$(".password_span").css("color","red");
				$(".password_span").html("【弱】");
			}else if($(this).val() != ""){
				$(".password_span").css("color","orange")
				$(".password_span").html("【一般】");
				$(".password").css("border","1px solid #999")
				isTrue = true;
			}

		}
	})
	$(".password2").attr("maxlength","16");
	$(".password2").blur(function(){
		if ($(this).val()!=""&& $(".password").val()!="") {
			if ($(this).val()==$(".password").val()) {
				$(".password2_span").css("color","green")
				$(".password2_span").html("√")
				$(".password2").css("border","1px solid #999")
				isTrue = true;
			}else{
				$(".password2_span").css("color","red")
				$(".password2_span").html("<img src ='images/error.gif'/>与上次输入不一致")
			}
		}
	})
	var eml = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
	$(".eMail").blur(function(){
		if ($(this).val()!=""){
			if (!eml.test($(".eMail").val())) {
				$(".eMail_span").css("color","red")
				$(".eMail_span").html("<img src ='images/error.gif'/>邮箱格式有误")
			}else{
				$(".eMail_span").css("color","green")
				$(".eMail_span").html("√")
				$(".eMail").css("border","1px solid #999")
				isTrue = true;
			}
		}	
	})
	var phone=/^[1][3-8][0-9]{9}$/;
	$(".telNumber").attr("maxlength","11");
	$(".telNumber").bind("input propertychange",function(){
		if (!phone.test($(".telNumber").val())) {
			$(".telNumber_span").css("color","red")
			$(".telNumber_span").html("<img src ='images/error.gif'/>请输入正确的手机号码")
		}else{
			$(".telNumber_span").css("color","green")
			$(".telNumber_span").html("√点击按钮发送校验短信")
			$(".telNumber").siblings("a").css("background-color","yellow")
			$(".telNumber").css("border","1px solid #999")
			isTrue = true;
		}
	})
	$(".authCode_btn").html(yzm());
	$(".authCode_btn").css("background-color","yellow").css("fontSize","14px").css("color","red")
	$(".authCode_btn").click(function(){
		$(".authCode_btn").html(yzm());
	})
	$(".authCodes").blur(function(){
		if ($(this).val()!=""){
			if ($(this).val()==$(".authCode_btn").html()) {
				$(".authCode_span").css("color","green")
				$(".authCode_span").html("√验证通过")
				$(".authCodes").css("border","1px solid #999")
				isTrue = true;
			}else{
				$(".authCode_span").css("color","red")
				$(".authCode_span").html("<img src ='images/error.gif'/>验证码错误")
			}
		}	
	})
	$(".login_btn").click(function(){
		if ($(".username").val()=="" || !isTrue) {
			$(".username").css("border","1px solid red")
			alert("请按要求输入用户名");
		}else if ($(".password").val()=="" || !isTrue) {
			$(".password").css("border","1px solid red")
			alert("请按要求输入密码");
		}else if ($(".password2").val()=="" || !isTrue) {
			$(".password2").css("border","1px solid red")
			alert("确认密码与填写密码不一致");
		}else if ($(".eMail").val()=="" || !isTrue) {
			$(".eMail").css("border","1px solid red")
			alert("请按要求输入邮箱");
		}else if ($(".telNumber").val()=="" || !isTrue) {
			$(".telNumber").css("border","1px solid red")
			alert("请按要求输入手机号");
		}else if ($(".anthcode").val()=="" || !isTrue) {
			$(".anthcodes").css("border","1px solid red")
			alert("请填写验证码");
		}else{
			alert("注册成功，欢迎加入！")
		}
	})	
})
function yzm(){
        var arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9'];
        var str = '';
        for(var i = 0 ; i < 4 ; i ++ )
            str += ''+arr[Math.floor(Math.random() * arr.length)];
        return str;
    }