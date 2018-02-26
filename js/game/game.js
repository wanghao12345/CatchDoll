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
	// $('canvas').barrager([{"msg":'弹幕消息'}]);
	$('#barrage').on('click',function(){
		var value = $(this).attr('value');
		if (value == "0") {//切换到不弹幕
			$(this).find('img').attr('src','img/game/tan1.png');
			$(this).attr('value','-1');	
			$('canvas').barrager("clear");
		}
		if (value == "-1") {//切换到弹幕
			$(this).find('img').attr('src','img/game/tan.png');
			$(this).attr('value','0');	
			sendBarrage();
		}		
	})

	/***********************----报修----************************/
	//打开
	$('#setup').on('click',function(){
		$(".game-menu-list").load("template/game/menu-setup.html");

	})
	//确定
	$('.game-menu-list').on('click','#setup-query',function(){
		$(".game-menu-list").html('');
		repairRequest();
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
	/*******************-----提示框-----******************/	
	//關閉
	$('body').on('click','.tip #tip-close',function(){
		$('body .tip').remove();
	})
	//確定
	$('body').on('click','.tip #tip-btn',function(){
		$('body .tip').remove();
	})
	/*******************-----开始游戏-----******************/	
	$('#start-game').on('click',function(){
		addTip('请下载app开始游戏！');
		// startGame();
	})
	/*******************-----充值-----******************/
	$('#coin-number').on('click',function(){
		addTip('请下载app充值！');
	})
	/*******************-----vedio-----******************/

	if (isIosOrAndroid()==1) {//ios m3u8 hls.js

	}
	if (isIosOrAndroid()==0) {//android flv video.js

	}



	/*var myVideo=document.getElementById("video"); 
	myVideo.play(); */

	if(Hls.isSupported()) {
	    var video = document.getElementById('video');
	    var hls = new Hls();
	    // hls.loadSource('http://www.streambox.fr/playlists/test_001/stream.m3u8');
	    hls.loadSource('http://rtmp.wawa.4utec.cn/live/1_A.m3u8');
	    hls.attachMedia(video);
	    hls.on(Hls.Events.MANIFEST_PARSED,function() {
	      video.play();
	  });
	 }




})




