$(function(){
	$(".clearall").click(function(){
				$(".favoriteList").find("li").remove()
				$.cookie("goods",null);
				sc_msg();
			})
	sc_msg();
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
								html += '<li class="favorite_scp"><div class="sc_goodsPic"><img src="'+imglist[sc_obj[i].id].url+'" alt=""></div><div class="sc_goodsTitle">'+imglist[sc_obj[i].id].title+'</div><div class="sc_goodsNum">商品数量:'+sc_obj[i].num+'</div><div class="sc_goodsPrice">商品售价:'+imglist[sc_obj[i].id].price+'</div><button id = "isYes">点击跳转支付界面</button><div class="removesc">×</div></li>';
							}
							
							$('.favoriteList').html(html);
							$('.removesc').click(function(){
								$(this).parents(".favorite_scp").remove();
								
							})
							$(".favoriteList").on("click", "#isYes", function(){
								alert("跳转中。。。")
							});




						}
					}
				})
			}

})