/**
 *获取机器类型
 */
RequestMachineType();
function RequestMachineType(){
	var myUrl = 'http://ateam.ticp.io:9107/45';
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
	var myUrl = 'http://ateam.ticp.io:9107/14?type='+type+'&tk='+token;
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
	    	var img_url = 'http://ateam.ticp.io:9107/'+item[i].img_url;
	    	var name = item[i].name;//名字

	    	var content = '<li>';
	    	content += '<input type="hidden" id="mid" value='+mid+' />';
	    	content += '<input type="hidden" id="doll_id" value='+doll_id+' />';
	    	content += '<div class="list">';
	    	content += '<div class="list-top">';
	    	content += '<div class="list-num">'+inventory+'</div>';
	    	switch(status){
	    		case 1://使用中
			    	content += '<div class="list-status list-status2">';
			    	content += '<img src="img/index/list_status2.png" alt="维修中">';
			    	content += '<span>使用中......</span>';
			    	content += '</div>';	    		
	    		break;
	    		case 2://维护
			    	content += '<div class="list-status list-status1">';
			    	content += '<img src="img/index/list_status1.png" alt="维修中">';
			    	content += '<span>维修中......</span>';
			    	content += '</div>';		    		
	    		break;
	    	}
	    	content += '<div class="list-img">';
	    	content += '<img src='+img_url+' alt="测试">';
	    	content += '</div>';
	    	content += '</div>';
	    	content += '<div class="list-bottom">';
	    	content += '<div class="list-title">'+name+'</div>';
	    	content += '<div class="list-coin">'+price+'/次</div>';
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
	var myUrl = 'http://ateam.ticp.io:9107/70';
	$.ajax({
	  url: myUrl,
	  type: 'get',
	  dataType: 'json',
	  success: function (data) {
	    console.log(data)
	    token = data.ret[0].d.token;
	    guestno = data.ret[0].d.guestno;
	    RequestMachineList(0);
	    getUserInfo(data);
	  },
	  fail: function (err) {
	    console.log(err)
	  }
	})		
}
/**
 * 获取用户的基本信息
 */
function getUserInfo(data){
	var item = data.ret[0].d;

	var head_img = 'http://ateam.ticp.io:9107'+item.headImg;
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
		$(".menu-list-frame").load("template/sign.html",function(){
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
	var myUrl = 'http://ateam.ticp.io:9107/23?tk='+token+'&advice='+advice;
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
	var myUrl = 'http://ateam.ticp.io:9107/43?tk='+token+'&type=invite';
	$.ajax({
	  url: myUrl,
	  type: 'get',
	  dataType: 'json',
	  success: function (data) {
	    console.log(data)

	    var inviteCode = data.ret[0].d.inviteCode;//邀请码
	    var QR_img = 'http://ateam.ticp.io:9107'+data.ret[0].d.qrCode;//邀请二维码
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
	var myUrl = 'http://ateam.ticp.io:9107/27?tk='+token;
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
			addTip('签到失败！');		    	
	    }
	  },
	  fail: function (err) {
	    console.log(err)
	  }
	})	
}
/**
 * 获取banner数据
 */
function getBanner() {
	var myUrl = 'http://ateam.ticp.io:9107/52';
	$.ajax({
	  url: myUrl,
	  type: 'get',
	  dataType: 'json',
	  success: function (data) {
	    console.log(data)
	    var item = data.ret[0].d.list;
	    var content = '';
	    for (var i = 0; i < item.length; i++) {
	    	content += '<li><a href='+item[i].url+'><img src='+item[i].img+'></a></li>'
	    }
	    $('#slides').html(content);
	    $('.flexslider').flexslider({
			directionNav: true,
			pauseOnAction: false
		});
	  },
	  fail: function (err) {
	    console.log(err)
	  }
	})	

	

}