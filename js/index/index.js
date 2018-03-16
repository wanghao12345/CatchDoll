
$(function(){

	$('ul#tab').on('click','li',function(){
		$('ul#tab li').removeClass('active');
		$(this).addClass('active');
		//加载机器列表
		RequestMachineList($(this).attr('value'));		
	})

	/**
	 *菜单
	 */
	$('#logo-btn').on('click',function(){
		$(".menu-frame").load("template/menu/menu.html",function(){
			getMenuUserInfo();
		});
	})
	$('.menu-frame').on('click','.menu',function(){
		$(this).remove();
	})
	/**
	 * banner
	 */
	getBanner();

	 /*******************-----意见反馈-----******************/
	 //打开
	$('.menu-frame').on('click','#menu-news',function(){
		$(".menu-list-frame").load("template/menu/menu-Opinion.html");
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
		var advice = $('.menu-list-news #textarea').val();
		feelbackOpinion(advice);
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
		$(".menu-list-frame").load("template/menu/menu-connect.html");
	})
	//确定
	$('.menu-list-frame').on('click','#connect-query',function(){
		$('.menu-list-frame').html('');
	});
	/*******************-----邀请好友-----******************/
	 //打开
	$('.menu-frame').on('click','#menu-share',function(){
		$(".menu-list-frame").load("template/menu/menu-share1.html");
		InvitationCodeShare(token);	
	})
	//返回
	$('.menu-list-frame').on('click','.share1 #share1-back',function(){
		$('.menu-list-frame').html('');
	})	
	//分享
	$('.menu-list-frame').on('click','.share1 #share-btn',function(){
		$('.menu-list-frame').html('');
		$(".menu-list-frame").load("template/menu/menu-share.html");	
	});
	//确定分享
	$('.menu-list-frame').on('click','.menu-list-shares #share-query',function(){
		$('.menu-list-frame').html('');
	});	
	/*******************-----排行榜-----******************/
	 //打开富豪榜
	$('.menu-frame').on('click','#menu-rank',function(){
		$(".menu-list-frame").load("template/menu/menu-rank.html");
		richList();
	})
	//打开富豪榜
	$('.menu-list-frame').on('click','#menu-list-ranks #rank-tab1',function(){
		richList();
	})
	//打开达人榜
	$('.menu-list-frame').on('click','#menu-list-ranks #rank-tab2',function(){
		masterList();
	})
	/*******************-----地址列表-----******************/
	 //打开
	$('.menu-frame').on('click','#menu-address',function(){
		$(".menu-list-frame").load("template/menu/menu-address.html");
		addressList();
	})


	/*******************-----兑换-----******************/
	 //打开
	$('.menu-frame').on('click','#menu-exchange',function(){
		$(".menu-list-frame").load("template/menu/menu-exchange.html");
	})
	/*******************-----邮件-----******************/
	 //打开
	$('.main-container').on('click','#menu-email',function(){
		$(".menu-list-frame").load("template/menu/menu-email.html");
		emailList();
	})
	//邮件详情
	$('.menu-list-frame').on('click','ul#menu-email-list li button',function(){
		$(".tip-frame").load("template/menu/menu-emailDetail.html");
		emailDetail($(this).attr('value'));
	})	
	//邮件详情关闭
	$('.tip-frame').on('click','#close',function(){
		$(".tip-frame").html('');
	})	



	/*******************-----背包-----******************/
	 //打开未下单
	$('.main-container').on('click','#menu-knapsack',function(){
		$(".menu-list-frame").load("template/menu/menu-cart.html");
		cartNoOrderList();
	})
	$('.menu-list-frame').on('click', '.menu-list-carts #rank-tab1', function() {
		cartNoOrderList();
	});

	//打开已下单
	$('.menu-list-frame').on('click', '.menu-list-carts #rank-tab2', function() {
		cartOrderList();
	});
	/*******************-----幫助-----******************/
	 //打开
	$('.menu-frame').on('click','#menu-help',function(){
		$(".menu-list-frame").load("template/menu/menu-help.html");
		InvitationCodeShare(token);	
	})	
	/*******************-----今日签到-----******************/
	$('.menu-list-frame').on('click','#sign-query',function(){
		getSign();
		todaySign();
	})
	/*******************-----选择机器-----******************/
	$('ul#machineList').on('click','li',function(){
		//判断是否可以进行游戏
		var value = $(this).attr('value');
		if (value == 0) {
			addTip('设备正在维修！');
		}else{
			// 进入游戏房间
			goGameRoom(this);
		}
	})
	/*******************-----提示框-----******************/	
	//關閉
	$('body').on('click','.tip #tip-close',function(){
		$('body .tip').remove();
	})
	//確定
	$('body').on('click','.tip #tip-btn',function(){
		$('body .tip').remove();
	})
	/*******************-----充值-----******************/
	$('#my-coin').on('click',function(){
		addTip('请下载app充值！');
	})


	/*******************-----IOS微信浏览器-----******************/


})