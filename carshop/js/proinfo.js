$(function () {
	var oUl_width = $(".smallphoto").find("li").size()* $(".smallphoto").find("li").outerWidth();
	$(".smallphoto").css("width",oUl_width)
	$(".Toright").click(function(){
		if ($(".smallphoto").offset().left > 800 - oUl_width + 151.5) {
			$(".smallphoto").stop().animate({"left":$(".smallphoto").offset().left -151.5 - 470 +"px"})
		}else if ($(".smallphoto").offset().left < 800 - oUl_width + 151.5) {
			$(".smallphoto").stop().animate({"left":$(".smallphoto").offset({left:800 - oUl_width + 151.5})})
		}
	})
	$(".Toleft").click(function(){
		if ($(".smallphoto").offset().left <151.5) {
			$(".smallphoto").stop().animate({"left":$(".smallphoto").offset().left -151.5 + 470 +"px"})
		}else if ($(".smallphoto").offset().left > 151.5) {
			$(".smallphoto").stop().animate({"left":$(".smallphoto").offset({left:"151.5"})})
		}
	})
	$(".smallphoto").find("img").click(function(){
		$(".bigphoto").html('<img class ="bbb" src="'+ $(this).attr("src") +'">')
	})
	$(".joinsc").hover(function(){
		$(".joinsc").stop().animate({opacity:".7"})
	},function(){
		$(".joinsc").stop().animate({opacity:"1"})
	})
	$(".buynow").hover(function(){
		$(".buynow").stop().animate({opacity:".7"})
	},function(){
		$(".buynow").stop().animate({opacity:"1"})
	})
	var i = 0;
	$(".buynow").click(function(){
		if(i == 0){
			i = 1;
			var oPay = $('<div class = "pay"><h4>定金支付</h4><p>优先购车，确定预付定金￥20万？</p><button class = "close">关闭</button><button id = "isYes">点击跳转支付界面</button></div>');
				oPay.css({"position":"absolute","background":"#91b7ea","height":"130px","width": "300px","color": "#fff","textAlign":"center"});
				oPay.css({"left":($(window).width() - oPay.outerWidth()) / 2,"top":($(window).height() - oPay.outerHeight()) / 2 + $(window).scrollTop()})
				oPay.find("h4").css({"background":"#0dc9d5","height":"30px","width": "300px","color": "#fff","font":"18px/30px ''","fontWeight":"bold","textAlign":"center"})
				oPay.find("p").css({"height":"60px","width": "300px","color": "#fff","font":"14px/60px ''","fontWeight":"bold","textAlign":"center"})

				$("body").append(oPay);
			}
				$(".close").click(function(){
					i=0;
				$(".pay").remove();
				});
				$("#isYes").click(function(){
					i=0;
				$(".pay").remove();
				alert("跳转中。。。")
				});
	})
	$(".joinsc").click(function(){
		var goods = $('<div class="scp"><div class="goods_title"></div><div class="removesc">×</div></div>')
				 	
				 	$("#favorite_1").append(goods);
					
				 	goods.css({"height":"30px","width":"257px","color":"#fff","font":"12px/30px ' '",
				 		"border":"1px solid yellow","textAlign":"center","position":"relative"})
				 	goods.find(".goods_title").html($(".carRev").find("h5").html())
				 	goods.find(".removesc").css({"display":"block","height":"30px","width":"30px","color":"#fff","font":"12px/30px ' '",
				 		"textAlign":"center","position":"absolute","right":"0","background":"#ff4400","top":"0","cursor":"pointer"})
				 	$(".removesc").click(function(){
				  	$(this).parents(".scp").remove();
				  })
		alert("已添加收藏夹");
	})
		
})
	