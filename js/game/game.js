$(function(){

	//menu
	$('#menu-btn').on('click',function(){
		var value = $(this).attr("value");
		if (value == '1') {//展开状态
  			$(".menu-list").animate({'height':'1.8rem'});
			$(this).attr("value","0");
		} else {//收缩状态
			$(".menu-list").animate({'height':'9rem'});
			$(this).attr("value","1");
		}
	})
	/***********************----弹幕----************************/
	$('#barrage').on('click',function(){
		var value = $(this).attr('value');
		if (value == "0") {//切换到不弹幕
			$(this).find('img').attr('src','img/game/tan1.png');
			$(this).attr('value','-1');	
		}
		if (value == "-1") {//切换到弹幕
			$(this).find('img').attr('src','img/game/tan.png');
			$(this).attr('value','0');	
		}		
	})
	/*************************-----详情-----***********************/
	//打开
	$('#detail').on('click',function(){
		$(".game-menu-list").load("template/game/menu-detail.html");
		CommodityDetails();
	})
	//关闭
	$('.game-menu-list').on('click','#close',function(){
		$(".game-menu-list").html('');
	})
	//取消
	$('.game-menu-list').on('click','#cancer',function(){
		$(".game-menu-list").html('');
	})
	//确定
	$('.game-menu-list').on('click','#detail-query',function(){
		$(".game-menu-list").html('');
	})
	/*************************-----帮助-----***********************/
	$('#help').on('click',function(){
		$(".game-menu-list").load("template/game/menu-help.html");
	})	


})