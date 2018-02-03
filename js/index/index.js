
$(function(){
	// tab
	$('ul#tab li').on('click',function(){
		$('ul#tab li').removeClass('active');
		$(this).addClass('active');
		if (parseInt($(this).index()) == 4) {
			$('ul#tab li:last-child div.tab-bottom img').css('width','1.9rem');
		}
		
	})
	/**
	 *菜单
	 */
	$('#logo-btn').on('click',function(){
		$(".menu-frame").load("template/menu.html");
	})
	$('.menu-frame').on('click','.menu',function(){
		$(this).remove();
	})

	 /*******************-----意见反馈-----******************/
	 //打开
	$('.menu-frame').on('click','#menu_news',function(){
		$(".menu-list-frame").load("template/menu-Opinion.html");
	})
	//关闭
	$('.menu-list-frame').on('click','#close',function(){
		$('.menu-list-frame').html('');
	});
	//取消
	$('.menu-list-frame').on('click','#cancer',function(){
		$('.menu-list-frame').html('');
	});
	//确定
	$('.menu-list-frame').on('click','#opinion-query',function(){
		$('.menu-list-frame').html('');
	});
	//监听输入
	$('.menu-list-frame').on('input propertychange','#textarea',function(){
		var value = $(this).val().length;
		$('.menu-list-news #wordsNumber').html(value);
	})
	/*******************-----联系我们-----******************/
	 //打开
	$('.menu-frame').on('click','#menu-connect',function(){
		$(".menu-list-frame").load("template/menu-connect.html");
	})
	//确定
	$('.menu-list-frame').on('click','#connect-query',function(){
		$('.menu-list-frame').html('');
	});
	/*******************-----邀请好友-----******************/
	 //打开
	$('.menu-frame').on('click','#menu-share',function(){
		$(".menu-list-frame").load("template/menu-share1.html");
	})
	//返回
	$('.menu-list-frame').on('click','.share1 #share1-back',function(){
		$('.menu-list-frame').html('');
	})	
	//分享
	$('.menu-list-frame').on('click','.share1 #share-btn',function(){
		$('.menu-list-frame').html('');
		$(".menu-list-frame").load("template/menu-share.html");		
	});
	//确定分享
	$('.menu-list-frame').on('click','.menu-list-shares #share-query',function(){
		$('.menu-list-frame').html('');
	});	





})