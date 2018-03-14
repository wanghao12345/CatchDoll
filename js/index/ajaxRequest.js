/**
 *获取机器类型
 */
RequestMachineType();
function RequestMachineType(){
	var myUrl = 'http://web.zhuazhuale.4utec.cn:9107/45';
	$.ajax({
	  url: myUrl,
	  type: 'get',
	  dataType: 'json',
	  success: function (data) {
	    console.log(data)
	    var item = data.ret[0].d.categoryList;
	    var width = item.length*2.8+1;
	    $('#tab').css('width',width+'rem');
	    $('#tab').html('');
	    for (var i = 0; i < item.length; i++) {
	    	var id = item[i].id;
	    	var name = item[i].name;
	    	if (i == 0) {
	    		var content = '<li class="active" value='+id+'>';
	    	} else {
	    		var content = '<li value='+id+'>';
	    	}
	    	content += '<div class="tab">';
	    	content += '<div class="tab-bottom">'+name+'</div>';
	    	content += '</div>';
	    	content += '</li>';
	    	$('#tab').append(content);
	    }
	  },
	  fail: function (err) {
	    console.log(err)
	  }
	})	
}

/**
 *获取机器列表
 */
function RequestMachineList(type) {
	var myUrl = 'http://web.zhuazhuale.4utec.cn:9107/14?type='+type+'&tk='+token;
	$.ajax({
	  url: myUrl,
	  type: 'get',
	  dataType: 'json',
	  success: function (data) {
	    console.log(data)
	    $('ul#machineList').html('');
	    var item = data.ret[0].d.machineData;
	    for (var i = 0; i < item.length; i++) {
	    	var mid = item[i].mid;//机器id
	    	var doll_id = item[i].doll_id;//玩偶id
	    	var price = item[i].price;
	    	var inventory = item[i].inventory;//库存
	    	var status = item[i].status;//状态
	    	var img_url = 'http://web.zhuazhuale.4utec.cn:9107/'+item[i].img_url;
	    	var name = item[i].name;//名字
	    	if (inventory == 0 || status==2) { //不可以游戏
	    		var content = '<li value="0">';
	    	}else{
	    		var content = '<li>'
	    	}
	    	content += '<input type="hidden" id="mid" value='+mid+' />';
	    	content += '<input type="hidden" id="doll_id" value='+doll_id+' />';
	    	content += '<div class="list">';
	    	// content += '<div class="list-top list-top-free">';
	    	/*if (inventory>0 && inventory <= 10) {
	    		content += '<div class="surplus"><img src="img/index/surplus.png" alt="剩余"/></div><div class="list-num">'+inventory+'</div>';
	    	}*/
	    	if (status==2 || (inventory == 0 && status!=2)) { //维修中
		    	content += '<div class="list-top list-top-repair">';
	    		content += '<div class="list-status">';
		    	content += '<img src="img/index/list-top-repair-i.png" alt="维修中">';
		    	content += '<span style="color:#b3b3b3">维修中</span>';		
		    	content += '</div>';	    		
	    	}else if (status==1) { //使用中
				content += '<div class="list-top list-top-use">';
	    		content += '<div class="list-status">';
		    	content += '<img src="img/index/list-top-use-i.png" alt="使用中">';
		    	content += '<span style="color:#ffc52b">使用中</span>';		
		    	content += '</div>';				
	    	}else{//空闲
				content += '<div class="list-top list-top-free">';
	    		content += '<div class="list-status">';
		    	content += '<img src="img/index/list-top-free-i.png" alt="空闲中">';
		    	content += '<span style="color:#2dcdff">空闲中</span>';		
		    	content += '</div>';		
	    	}
/*	    	switch(status){
	    		case 1://使用中
			    	content += '<div class="list-status list-status2">';
			    	content += '<img src="img/index/list_status2.png" alt="使用中">';
			    	content += '<span>使用中......</span>';
			    	content += '</div>';	    		
	    		break;
	    		case 2://维护
			    	content += '<div class="list-status list-status1">';
			    	content += '<img src="img/index/list_status1.png" alt="维修中">';
			    	content += '<span>维修中......</span>';
			    	content += '</div>';		    		
	    		break;
	    	}*/
	    	content += '<div class="list-img">';
	    	content += '<img src='+img_url+' alt="测试">';
	    	content += '</div>';
	    	content += '</div>';
	    	content += '<div class="list-bottom">';
	    	content += '<div class="list-title">'+name+'</div>';
	    	content += '<div class="list-coin"><img src="img/index/coin_left.png" alt="" /><span>'+price+'/次</span></div>';
	    	content += '</div>';
	    	content += '</div>';
	    	content += '</li>';
	    	$('ul#machineList').append(content);
	    }
	  },
	  fail: function (err) {
	    console.log(err)
	  }
	})	
}
/**
 * 获取测试token,guestno
 */
var token = '';
var guestno = ''
getTestToken();
function getTestToken(){
	var myUrl = 'http://web.zhuazhuale.4utec.cn:9107/70';
	$.ajax({
	  url: myUrl,
	  type: 'get',
	  dataType: 'json',
	  success: function (data) {
	    console.log(data)
	    token = data.ret[0].d.token;
	    guestno = data.ret[0].d.guestno;
	    RequestMachineList(0);
	    getUserInfo(data,'ish');
	  },
	  fail: function (err) {
	    console.log(err)
	  }
	})		
}

/**
 * 获取用户的基本信息
 */
function getUserInfo(data,ish){
	var item = data.ret[0].d;
	var head_img;
	if (ish=='ish1') {
		head_img = item.headImg;
	}else if (ish == 'ish'){
		head_img = 'http://web.zhuazhuale.4utec.cn:9107'+item.headImg;		
	}
	$('#head-img').html('<img src='+head_img+' alt="头像" />');
	var head_name = item.name;
	$('#head-name').html(head_name);
	var money = item.leftMoney;
	$('#my-coin').html(money);
	var inviation_code = item.inviation_code;//ID
	$('#inviation_code').html(inviation_code);
	var bonus = item.bonus;//积分
	$('#bonus').html(bonus);
	var totalDay = item.totalDay;//登录的总天数
	$('#totalDay').html(totalDay);
	var sigStatus = item.sigStatus;//今天的登录状态
	$('#sigStatus').html(sigStatus);
	if (sigStatus == 0) {//未领取，打开领奖
		$(".menu-list-frame").load("template/tip/sign.html",function(){
			for (var i = 1; i <= totalDay; i++) {
				$('#sign-img'+i).append('<img src="img/sign/ok.png" id="ok">');	
			}
		});
	}
}
/**
 * 加载菜单上用户的基本信息
 */
function getMenuUserInfo(){
	$('#menu-head-img').html($('#head-img').html());
	$('#menu-head-name').html($('#head-name').html());
	$('#menu-head-ID').html($('#inviation_code').html());
	$('#menu-head-bonus').html($('#bonus').html());

}
/**
 * 意见反馈
 */
function feelbackOpinion(advice){
	var myUrl = 'http://web.zhuazhuale.4utec.cn:9107/23?tk='+token+'&advice='+advice;
	$.ajax({
	  url: myUrl,
	  type: 'get',
	  dataType: 'json',
	  success: function (data) {
	    console.log(data)
	    if (data.ret[0].d.errcode == 0) {
	    	addTip('意见反馈成功！');
	    }
	    if (data.ret[0].d.errcode == -1) {
	    	addTip(data.ret[0].d.msg);
	    }
	  },
	  fail: function (err) {
	    console.log(err)
	  }
	})	
}
/**
 * 分享游戏接口(邀请码分享)
 */
function InvitationCodeShare(token){
	var myUrl = 'http://web.zhuazhuale.4utec.cn:9107/43?tk='+token+'&type=invite';
	$.ajax({
	  url: myUrl,
	  type: 'get',
	  dataType: 'json',
	  success: function (data) {
	    console.log(data)

	    var inviteCode = data.ret[0].d.inviteCode;//邀请码
	    var QR_img = 'http://web.zhuazhuale.4utec.cn:9107'+data.ret[0].d.qrCode;//邀请二维码
	    var inviteCodeArr = inviteCode.split('');
	    $('.share1 #share1-Invitation').html('');
	    $('.share1 #share1-QR').html('');
	    var content = "";
	    for (var i = 0; i < inviteCodeArr.length; i++) {
	    	content += '<span>'+inviteCodeArr[i]+'</span>'
	    }
	    $('.share1 #share1-Invitation').append(content);
	    $('.share1 #share1-QR').append('<img src='+QR_img+' alt="二维码">');
	  },
	  fail: function (err) {
	    console.log(err)
	  }
	})		
}
/**
 * 签到得奖励
 */
function getSign(){
	var myUrl = 'http://web.zhuazhuale.4utec.cn:9107/27?tk='+token;
	$.ajax({
	  url: myUrl,
	  type: 'get',
	  dataType: 'json',
	  success: function (data) {
	    console.log(data)
	    if (data.ret[0].d.errcode == 0) {
			var totalDay = parseInt($('#totalDay').html())+1;
			$('#sign-img'+totalDay).append('<img src="img/sign/ok.png" id="ok">');
			var time = window.setTimeout(function(){
				$(".menu-list-frame").html('');
			},1000)	
	    }
	    if (data.ret[0].d.errcode == -1) {
			addTip('获取奖励失败！');		    	
	    }
	  },
	  fail: function (err) {
	    addTip('获取奖励失败！');
	  }
	})	
}
/**
 * 每日签到
 */
function todaySign(){

	var myUrl = 'http://web.zhuazhuale.4utec.cn:9107/29?tk='+token;
	$.ajax({
	  url: myUrl,
	  type: 'get',
	  dataType: 'json',
	  success: function (data) {
		console.log(data);
	  },
	  fail: function (err) {
	    console.log(err);
	  }
	})	
}
/**
 * 排行榜-富豪榜(消耗排行)
 */
function richList(){
	$('#menu-list-ranks ul#menu-rank-list li').remove();
	var myUrl = 'http://web.zhuazhuale.4utec.cn:9107/16?tk='+token;
	$.ajax({
	  url: myUrl,
	  type: 'get',
	  dataType: 'json',
	  success: function (data) {
		console.log(data);
		var item = data.ret[0].d.rankData;
		for (var i = 0; i < item.length; i++) {
			var content = '<li>';
			content += '<div class="ranking-left">';
			content += '<span class="rank-number">'+(i<3? '':(i+1) )+'</span>';
			content += '<span class="rank-name">'+item[i].nickname+'</span>';
			content += '</div>';
			content += '<div class="ranking-right">';
			content += '<span class="rank-icon"></span>';
			content += '<span class="rank-money">'+item[i].consume+'</span>';
			content += '</div>';
			content += '</li>';
			$('.menu-list-ranks ul#menu-rank-list').append(content);
		}
	  },
	  fail: function (err) {
	    console.log(err);
	  }
	})	
}
/**
 * 排行榜-达人榜(抓取排行)
 */
function masterList(){
	$('#menu-list-ranks ul#menu-rank-list li').remove();
	var myUrl = 'http://web.zhuazhuale.4utec.cn:9107/17?tk='+token;
	$.ajax({
	  url: myUrl,
	  type: 'get',
	  dataType: 'json',
	  success: function (data) {
		console.log(data);
		var item = data.ret[0].d.rankData;
		for (var i = 0; i < item.length; i++) {
			var content = '<li>';
			content += '<div class="ranking-left">';
			content += '<span class="rank-number">'+(i<3? '':(i+1) )+'</span>';
			content += '<span class="rank-name">'+item[i].nickname+'</span>';
			content += '</div>';
			content += '<div class="ranking-right">';
			content += '<span class="rank-icon"></span>';
			content += '<span class="rank-money">'+item[i].claw+'</span>';
			content += '</div>';
			content += '</li>';
			$('.menu-list-ranks ul#menu-rank-list').append(content);	
		}	
	  },
	  fail: function (err) {
	    console.log(err);
	  }
	})	
}





/**
 * 兑换
 */
function exchangeCode(){
	var myUrl = 'http://web.zhuazhuale.4utec.cn:9107/10008?tk='+token;
	$.ajax({
	  url: myUrl,
	  type: 'get',
	  dataType: 'json',
	  success: function (data) {
		console.log(data);
	  },
	  fail: function (err) {
	    console.log(err);
	  }
	})	
}
/**
 * 获取banner数据
 */
function getBanner() {
	var myUrl = 'http://web.zhuazhuale.4utec.cn:9107/52';
	$.ajax({
	  url: myUrl,
	  type: 'get',
	  dataType: 'json',
	  success: function (data) {
	    console.log(data)
	    var item = data.ret[0].d.list;
	    var content = '';
	    var slides = [];
	    for (var i = 0; i < item.length; i++) {
	    	var type = item[i].type;
	    	var slide = '';
	    	switch(type){
	    		case '1'://链接
	    			content += '<li><a href='+item[i].url+'><img src='+item[i].img+'></a></li>';
	    		break;
	    		case '2'://跳转机器
	    			content += '<li value='+type+' onclick="goGameRoomBanner('+item[i].url+','+item[i].id+')" ><img src='+item[i].img+'></li>';
	    		break;
	    		case '3'://新闻图片
	    			content += '<li><a href="img.html?img='+item[i].url+'"><img src='+item[i].img+'></a></li>';
	    		break;
	    		case '4'://跳页面
	    			content += '<li onclick="gotoShare()"><img src='+item[i].img+'></li>';	 		
	    		break;	    			    			    		
	    	}
	    	slides.push(slide);

	    }
	    $('#slides').myslides({'slides':content});
	  },
	  fail: function (err) {
	    console.log(err)
	  }
	})	
}
/**
 * 机器列表进入游戏房间
 */
 function goGameRoom(_this){
	$('.main-container').css('display','none');
	addLoading();
	// $('.game-cantainer').css('display','block');

	var mid = $(_this).find('input#mid').val();
	var doll_id = $(_this).find('input#doll_id').val();

	index_mid = mid;
	index_tk = token;
	index_guestno = guestno;
	index_doll_id = doll_id;
	// window.location.href="index.html?mid="+mid+"&tk="+token+"&guestno="+guestno+"&doll_id="+doll_id;
	sendTcpLogin();	

	var myVideo=document.getElementById("video");
	myVideo.play();			
 }
/**
 * banner进入游戏房间
 */
 function goGameRoomBanner(mid,doll_id){
	$('.main-container').css('display','none');
	addLoading();
	index_mid = mid;
	index_tk = token;
	index_guestno = guestno;


	index_doll_id = doll_id;
	sendTcpLogin();	

	var myVideo=document.getElementById("video");
	myVideo.play();			
 }
/**
 * banner跳页面
 */
 function gotoURL(url){
 	if (url!="" && url!=undefined && url!='undefined') {
 		window.location.href=url;	
 	}
 }
/**
 * banner跳分享页
 */
 function gotoShare(){
	$(".menu-list-frame").load("template/menu-share1.html");
	InvitationCodeShare(token);	
 }

