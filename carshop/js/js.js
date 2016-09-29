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
				var html6 = '';
				var html6_1 = '';
				var html7 = '';
				var html8 = '';
				var html9 = '';
				var html10 = '';
				var html11 = '';
				var html12 = '';
				var html13 = '';
				var html14 = '';
				//选车价格区间
				for(var i = 0 ; i < data.spread.length; i++){
					html1 +="<a href='#'>"+  data.spread[i].grade +"</a>"
				}
				$('.spread').html(html1)
				//选车品牌
				for(var i = 0 ; i < data.brands.length; i++){
					html2 +="<a href='#'>"+  data.brands[i].brand +"</a>"
				}
				$('.brands').html(html2)
				//选车年限区间
				for(var i = 0 ; i < data.vehicleAge.length; i++){
					 html3 +="<a href='#'>"+ data.vehicleAge[i].age +"</a>"
				}
				$('.vehicleAge').html(html3)
				//选车车型
				for(var i = 0 ; i < data.motorcycleType.length; i++){
					 html4 +="<a href='#'>"+ data.motorcycleType[i].type +"</a>"
				}
				$('.motorcycleType').html(html4)
				//导航栏推荐车源
				for(var i = 0 ; i < data.recommend.length; i++){
					 html5 +='<dl class="dl"><dd><a href="proinfo.html"><img src="'+ data.recommend[i].url +'"/></a></dd><dt><h3>'+data.recommend[i].price+'</h3><p>'+data.recommend[i].title+'</p><p><a href="#" class="more">查看更多&gt;&gt;</a></p></dt></dl>'
				}
				$('.recommend').html(html5)
				//推荐车源鼠标事件
				$(".dl").hover(function(){
					$(this).css("border","2px solid #e40f46 ")
				},function(){
					$(this).css("border","1px solid #999 ")
				})
				//banner图
				for(var i = 0 ; i < data.banner.length; i++){
					 html6 +='<li><a href="proinfo.html"><img src="'+data.banner[i].url+'"/></a></li>'
					 html6_1 +='<li></li>'
				}
				$('.example').find("ul").html(html6)
				//banner下方方格点
				$('.example').find("ol").html(html6_1)
				//轮播图实现调用luara插件
				$(".example").luara({width:"1600",height:"596",interval:4000,selected:"seleted"});
				//imglist中资源
				for(var i = 0 ; i < data.imglist.length; i++){
					 html7 +='<li><div><a href="proinfo.html"><div class="imgbox"><img src="'+data.imglist[i].url+'" /></div><p class="price">'+data.imglist[i].price+'</p><p class="carType">'+data.imglist[i].title+'</p></a><span id="'+data.imglist[i].id+'" class="sc">收藏</span><span class="db">对比</span></div>'
				}
				$('#uli').html(html7)
				//页面左侧收藏栏动画
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
				     sc_msg();//数据改变重新加载cookie
				 })
				  //img中心放大
				  $(".imgbox").hover(function(){
				  	$(this).find("img").stop().animate({"height":"180px","width":"240px","left":"-8px","top":"-10px"})
				  },function(){
				  	$(this).find("img").stop().animate({"height":"165px","width":"220px","left":"0","top":"0"})
				  })
				  //点击收藏商品加入收藏夹
				 $(".sc").click(function(){
				 	var id = this.id;
				 	//判断是否有过cookie缓存
						var first = $.cookie("goods") == null ? true : false;
						var same = false; //判断是否有相同的商品
						if(first){
							//第一次添加的时候,建立json结构
							$.cookie('goods', '[{id:' + id +',num:1}]');
							$.cookie('first', "false");
							alert("添加收藏成功");
						}else{
							var str = $.cookie("goods");
							var arr = eval(str); //字符串转对象
							//遍历所有的对象,如果id相同,让该商品的数量递增。
							for(var i in arr){
								if(arr[i].id == id){
									arr[i].num = arr[i].num + 1; //添加数量
									var cookieStr = JSON.stringify(arr);
									$.cookie('goods', cookieStr);
									same = true;
									alert("以加入过收藏夹");
								}
							}
							//如果id不同,添加该商品
							if(!same){
								var obj = {id:id,num:1};
								arr.push(obj);
								var cookieStr = JSON.stringify(arr);
								$.cookie("goods", cookieStr);
								alert("添加收藏成功");
							}
						}
						sc_msg();//获取新的cookie
				 }) 
				 //newlist左侧新闻资源
				 for(var i = 0 ; i < data.newslist.length; i++){
					 html8 +='<h4><a href="#">'+data.newslist[i].title+'</a></h4><p>'+data.newslist[i].details+'</p>'
				}
				$('.news').html(html8)
				//newlist右侧视频资源
				for(var i = 0 ; i < data.videolist.length; i++){
					 html9 +='<li><div><a href="#"><img src="'+data.videolist[i].url+'"/><p>'+data.videolist[i].title+'</p></a></div>'
				}
				$('.videolist').html(html9)
				$(".videolist").find("img").hover(function(){
					  	$(this).stop().animate({opacity:"1"})
					  },function(){
					  	$(this).stop().animate({opacity:"0.7"})
				})
				//newlist右侧下方更多视频
				for(var i = 0 ; i < data.videomore1.length; i++){
					 html10 +='<li><a href="#">'+data.videomore1[i].title+'</a></li>'
				}
				$('.v1').html(html10)
				for(var i = 0 ; i < data.videomore2.length; i++){
					 html11 +='<li><a href="#">'+data.videomore2[i].title+'</a></li>'
				}
				$('.v2').html(html11)
				//推荐网站
				for(var i = 0 ; i < data.webs.length; i++){
					 html12 +='<li><a href="#">'+ data.webs[i].web +'</a></li>'
				}
				$('.webs').html('<h4 class="li_title">推荐网站</h4>'+html12)
				//友情链接
				for(var i = 0 ; i < data.friendship.length; i++){
					 html13 +='<li><a href="#">'+ data.friendship[i].web +'</a></li>'
				}
				$('.friendship').html('<h4 class="li_title">友情链接</h4>'+html13)
				//特别鸣谢
				for(var i = 0 ; i < data.thinks.length; i++){
					 html14 +='<li><a href="#">'+ data.thinks[i].web +'</a></li>'
				}
				$('.thinks').html('<h4 class="li_title">特别鸣谢</h4>'+html14)
			}
	})
   //点击登录实现登录弹窗
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
	//搜索框获得焦点与失去焦点的运动
	$('#search').focus(function(){
		$('#search').animate({width:"200"});
	})
	$('#search').blur(function(){
		$('#search').animate({width:"130px"});
	})
	//nav 创建金融服务节点及block none
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
	//nav car中心及block none
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
	//nav car推荐及block none
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
	//streamer三条横幅节点创建
	var streamerBox1 = $("<div class='streamers' id='streamer1'></div>");
	var streamerBox2 = $("<div class='streamers' id='streamer2'></div>");
	var streamerBox3 = $("<div class='streamers' id='streamer3'></div>");
	//节点插入
	$(".streamer").find(".wrap").append(streamerBox1)
	$(".streamer").find(".wrap").append(streamerBox2)
	$(".streamer").find(".wrap").append(streamerBox3)
	$(".streamers").css({"height":"200px","width":"1600px","marginTop":"5px","position":"relative"})
	//高度变化动画
	$(".streamers").mouseover(function(){
		 $(this).stop().animate({'height':'250px'}).siblings().stop().animate({'height':'200px'})
	})
   	$(".streamers").mouseout(function(){
		 $(this).stop().animate({'height':'200px'})
	})
   	var streamerParBox1 = $('<div class="streamerPar"><h3>从0起步 成就不止</h3><p>捷豹XJL/XF 全系车型“30/70”零利率尊贷领享计划<br />尊享首付30%，24期月供0利率。轻松拥有捷豹，率享人生成就。</p><div class="more"><a href="proinfo.html"></a></div></div>')
   	var streamerParBox2 = $('<div class="streamerPar sp2"><h3>从0起步 成就不止</h3><p>捷豹XJL/XF 全系车型“30/70”零利率尊贷领享计划<br />尊享首付30%，24期月供0利率。轻松拥有捷豹，率享人生成就。</p><div class="more"><a href="proinfo.html"></a></div></div>')
   	var streamerParBox3 = $('<div class="streamerPar"><h3>从0起步 成就不止</h3><p>捷豹XJL/XF 全系车型“30/70”零利率尊贷领享计划<br />尊享首付30%，24期月供0利率。轻松拥有捷豹，率享人生成就。</p><div class="more"><a href="proinfo.html"></a></div></div>')
   	$("#streamer1").append(streamerParBox1);
   	$("#streamer2").append(streamerParBox2);
   	$("#streamer3").append(streamerParBox3);
   	$(".streamerPar").css({"height": "100px","width": "350px","position":"absolute","left":"300px","top": "65px"})
   	$(".streamers").find("p").css("font","12px/16px' '");
   	$(".streamers").find("h3").css({"font":"20px/30px' '","color":"#087152","fontWeight":"bold"})
   	streamerParBox1.find("p").css("color","#fff")
   	streamerParBox1.find("h3").css("color","#fff")
   	$(".sp2").css({"position":"absolute","left":"1000px"})
   	//加号处的鼠标事件
   	$(".more").find("a").mouseover(function(){
	$(this).css({"textIndent":"30px","width":"100px","textDecoration":"underline",font:"12px/20px' '",color:"#383937"});
   	$(this).html("查看更多")
   	})
  	$(".more").find("a").mouseout(function(){
   	$(this).css({"textIndent":"20px","width":"20px"});
   	$(this).html("")
   	})
  	//滑动高度确定出现返回top
 	$(document).on('scroll',function(){
		if ($(this).scrollTop() >= (200)) {
	        $(".returnTop").css("display","block")
	    }else if($(this).scrollTop() < (200)){
	    	$(".returnTop").css("display","none")
	    }
	});
	//返回top的划入划出事件
  	$(".returnTop").hover(function(){
  		$(".r1").css("display","block")
  	},function(){
  		$(".r1").css("display","none")
  	}) 
  	//返回top的动画
  	$(".returnTop").click(function(){
  		$("body,html").animate({scrollTop:0},500);
  		return false;
  	})
  	//意见反馈的动画
 	$(".feedback").hover(function(){
  		$(".f1").css("display","block")
  	},function(){
  		$(".f1").css("display","none")
  	})
  	//获取cookie创建收藏夹内容
 			function sc_msg(){
				$.ajax({
					url:"js/imglist.json",
					type:"GET",
					success:function(imglist){
						var sc_str = $.cookie("goods");
						if(sc_str){
							var sc_obj = eval(sc_str);
							var html = "";
							for(var i in sc_obj){
								html += '<div class="scp"><div class="goods_title">'+imglist[sc_obj[i].id].title+'</div><div id="'+i+'"  class="removesc">×</div></div>';
							}
							$('.favorite_list').html(html);
							$('.removesc').click(function(){
								$(this).parents(".scp").remove();
								var sc_str2 = $.cookie("goods");
								var sc_str3= sc_str2.replace(/,{"id":"6","num":1}/,"")
								$.cookie("goods",null);
								$.cookie("goods",sc_str3);
							})
						}
					}
				});
			}
});