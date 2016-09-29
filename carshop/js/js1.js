$(function(){
	$.ajax({
			url:'js/data.json',
			type:'GET',
			success:function(data){
				var html1 = '';
				var html2 = '';
				var html3 = '';
				var html4 = '';
				var html5 = '';
				for(var i = 0 ; i < data.spread.length; i++){
					html1 +="<a href='#'>"+  data.spread[i].grade +"</a>"
				}
				$('.spread').html(html1)
				for(var i = 0 ; i < data.brands.length; i++){
					html2 +="<a href='#'>"+  data.brands[i].brand +"</a>"
				}
				$('.brands').html(html2)
				for(var i = 0 ; i < data.vehicleAge.length; i++){
					html3 +="<a href='#'>"+ data.vehicleAge[i].age +"</a>"
				}
				$('.vehicleAge').html(html3)
				for(var i = 0 ; i < data.motorcycleType.length; i++){
					html4 +="<a href='#'>"+ data.motorcycleType[i].type +"</a>"
				}
				$('.motorcycleType').html(html4)
				for(var i = 0 ; i < data.recommend.length; i++){
					html5 +='<dl class="dl"><dd><a href="proinfo.html"><img src="'+ data.recommend[i].url +'"/></a></dd><dt><h3>'+data.recommend[i].price+'</h3><p>'+data.recommend[i].title+'</p><p><a href="#" class="more">查看更多&gt;&gt;</a></p></dt></dl>'
				}
				$('.recommend').html(html5)
				$(".dl").hover(function(){
					$(this).css("border","2px solid #e40f46 ")
				},function(){
					$(this).css("border","1px solid #999 ")
				})
			}
	});
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
	var service = $("<ol id='service'><li><a href='service.html'>信贷</a></li><li><a href='#'>车险</a></li></ol>");
	$(".nav").find(".wrap").append(service);
	service.css({height:"100px",width:"200px",position:"absolute",top:"40px",left:"820px",
		zIndex:"2",backgroundColor:"#fff",textAlign:"center",display:"none"})
	$(".financialService").hover(function(){
		service.css("display","block")
	},function(){
		service.css("display","none")
	})
	service.hover(function(){
		service.css("display","block")
	},function(){
		service.css("display","none")
	})
	service.find("a").css({display:"block",width:"200px",height:"50px",font:"16px/50px '微软雅黑'"});
	service.find("a").hover(function(){
		$(this).css("background","#e40f46").css("font","20px/50px '微软雅黑'")
	},function(){
		$(this).css("background","#fff").css("font","16px/50px '微软雅黑'")
	})
	//nav car中心
	$(".carCenter").hover(function(){
		$(".selectBox").css("display","block")
		
	},function(){
		$(".selectBox").css("display","none")
	})
	$(".selectBox").hover(function(){
		$(".selectBox").css("display","block")
	},function(){
		$(".selectBox").css("display","none")
	})
	//nav car推荐
	$(".carRecommend").hover(function(){
		$(".recommend").css("display","block")
	},function(){
		$(".recommend").css("display","none")
	})
	$(".recommend").hover(function(){
		$(".recommend").css("display","block")
	},function(){
		$(".recommend").css("display","none")
	})
	$(document).on('scroll',function(){
	if ($(this).scrollTop() >= (200)) {
        $(".returnTop").css("display","block")
    }else if($(this).scrollTop() < (200)){
    	$(".returnTop").css("display","none")
    }
	});
  	$(".returnTop").hover(function(){
  	$(".r1").css("display","block")
  	},function(){
  		$(".r1").css("display","none")
  	}) 
  	$(".returnTop").click(function(){
  	$("body,html").animate({scrollTop:0},500);
  	return false;
  	})
 	$(".feedback").hover(function(){
  	$(".f1").css("display","block")
  	},function(){
  	$(".f1").css("display","none")
  	})
  	var isTrue = true;
		$("#favorite_2").click(function(){
			if (isTrue){
				$("#favorite").css("opacity","0")
				$("#favorite").animate({"left":"0","opacity":"1"})
				$("#favorite_2").find("img").attr("src","images/fuchuang2.gif")
			isTrue = false;
			}else{
				$("#favorite").css("opacity","0.3")
				$("#favorite").animate({"left":"-259px","opacity":"1"})
				$("#favorite_2").find("img").attr("src","images/fuchuang.jpg")
				isTrue = true;
			}	

	})
		$('#search').focus(function(){
		$('#search').animate({width:"200"});
	})
	$('#search').blur(function(){
		$('#search').animate({width:"130px"});
	})
	
})